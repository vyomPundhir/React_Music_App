import React, { useEffect, useState } from 'react'
import AlbumCard from './AlbumCard'
import user from "../assets/user.png"
import axios from 'axios'

function PopularRadio() {

  const [playlists, setPlaylists] = useState([])
  let token = window.localStorage.getItem("token")

  useEffect(() => {
    const fetchPlaylists = async () => {
      try {
        const {data} = await axios.get("https://api.spotify.com/v1/browse/featured-playlists", {
          headers: {
            Authorization: `Bearer ${token}`
          },
          params: {
            limit: 20,
          }
        });
        console.log(data)

      } catch (error) {
        console.error('Error fetching radios', error);
      }
    };
  
    fetchPlaylists()
  }, [token])

  return (
    <section className="flex flex-col gap-[20px]">

      <div className="flex flex-col gap-[20px]">


        <h4 className="hover:cursor-pointer hover:underline text-[27px] font-[700]">Popular Radio</h4>


        <div className="flex flex-row items-center justify-start flex-wrap gap-[10px]">

          {/* {
            playlists.map(album => (
        
              <div key={album.id}>
                {
                  album.images.length ? <AlbumCard albumImage={album.images[0].url} albumName={album.name} albumDetail={album.type} /> : 
                  <AlbumCard artistImage={user} albumName={album.name} albumDetail={album.type} />
                }
        
              </div>
            ))
          } */}

        </div>

      </div>

    </section>
  )
}

export default PopularRadio