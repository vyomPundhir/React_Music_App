import React, { useEffect, useState } from 'react'
import AlbumCard from './AlbumCard'
import user from "../assets/user.png"
import axios from 'axios'
import { Link } from 'react-router-dom'

function FeaturedCharts() {

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


        <h4 className="hover:cursor-pointer hover:underline text-[27px] font-[700]">Featured Charts</h4>


        <div className="flex flex-row items-center justify-start flex-wrap gap-[10px]">

          {
            playlists.map(playlist => (
        
              <Link to={`/playlist/${playlist.id}`} key={playlist.id}>
                {
                  playlist.images.length ? <AlbumCard albumImage={playlist.images[0].url} albumName={playlist.name} albumDetail={playlist.type} /> : 
                  <AlbumCard albumImage={user} albumName={playlist.name} albumDetail={playlist.type} />
                }
        
              </Link>
            ))
          }

        </div>

      </div>

    </section>
  )
}

export default FeaturedCharts