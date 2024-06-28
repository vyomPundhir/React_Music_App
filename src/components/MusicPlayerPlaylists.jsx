import React, { useEffect, useState } from 'react'
import AlbumCard from './AlbumCard'
import user from "../assets/user.png"
import axios from 'axios'
import { Link } from 'react-router-dom'

const MusicPlayerPlaylists = () => {

  const [music, setMusic] = useState([])
  let token = window.localStorage.getItem("token")

  useEffect(() => {
    const fetchMusic = async () => {
      try {
        const {data} = await axios.get("https://api.spotify.com/v1/me/top/tracks", {
          headers: {
            Authorization: `Bearer ${token}`
          },
          params: {
            limit: 50
          }
        });
        console.log(data)
        setMusic(data.items)
        

      } catch (error) {
        console.error('Error fetching Music', error);
      }
    };
  
    fetchMusic()
  }, [token])

  return (
    <section className="flex flex-col gap-[20px]">

      <div className="flex flex-col gap-[20px]">


        <h4 className="hover:cursor-pointer hover:underline text-[27px] font-[700]">Music Player Playlists</h4>


        <div className="flex flex-row items-center justify-start flex-wrap gap-[10px]">

          {
            music.map(item => (
        
              <Link to={`/track/${item.id}`} key={item.id}>
                {
                  item.album.images.length ? <AlbumCard albumImage={item.album.images[0].url} albumName={item.name} albumDetail={item.album.artists[0].name} /> : 
                  <AlbumCard albumImage={user} albumName={item.name} albumDetail={item.album.artists.name} />
                }
        
              </Link>
            ))
          }

        </div>

      </div>

    </section>
  )
}

export default MusicPlayerPlaylists