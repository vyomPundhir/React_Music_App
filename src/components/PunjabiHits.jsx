import React, { useEffect, useState } from 'react'
import AlbumCard from './AlbumCard'
import user from "../assets/user.png"
import axios from 'axios'

function PunjabiHits() {

  const [playlists, setPlaylists] = useState([])
  let token = window.localStorage.getItem("token")

  useEffect(() => {
    const fetchPlaylists = async () => {
      try {
        const {data} = await axios.get("https://api.spotify.com/v1/browse/categories/0JQ5DAqbMKFKSopHMaeIeI/playlists", {
          headers: {
            Authorization: `Bearer ${token}`
          },
          params: {
            limit: 30,
          }
        });
        console.log(data)
        setPlaylists(data.playlists.items)

      } catch (error) {
        console.error('Error fetching featured charts', error);
      }
    };
  
    fetchPlaylists()
  }, [token])

  return (
    <section className="flex flex-col gap-[20px]">

      <div className="flex flex-col gap-[20px]">


        <h4 className="hover:cursor-pointer hover:underline text-[27px] font-[700]">Punjabi Hits</h4>


        <div className="flex flex-row items-center justify-start flex-wrap gap-[10px]">

          {
            playlists.map(playlist => (
        
              <div key={playlist.id}>
                {
                  playlist.images.length ? <AlbumCard albumImage={playlist.images[0].url} albumName={playlist.name} albumDetail={playlist.type} /> : 
                  <AlbumCard albumImage={user} albumName={playlist.name} albumDetail={playlist.type} />
                }
        
              </div>
            ))
          }

        </div>

      </div>

    </section>
  )
}

export default PunjabiHits