import React, { useEffect, useState } from 'react'
import AlbumCard from './AlbumCard'
import user from "../assets/user.png"
import axios from 'axios'

const Music = () => {

  const [items, setItems] = useState([])
  let token = window.localStorage.getItem("token")

  useEffect(() => {
    const fetchPlaylists = async () => {
      try {
        const {data} = await axios.get("https://api.spotify.com/v1/browse/categories/0JQ5DAqbMKFHCxg5H5PtqW/playlists", {
          headers: {
            Authorization: `Bearer ${token}`
          },
          params: {
            limit: 30,
          }
        });
        console.log(data)
        setItems(data.playlists.items)

      } catch (error) {
        console.error('Error fetching recommendations', error);
      }
    };
  
    fetchPlaylists()
  }, [token])

  return (
    <section className="flex flex-col gap-[20px]">

      <div className="flex flex-col gap-[20px]">


        <h4 className="hover:cursor-pointer hover:underline text-[27px] font-[700]">Music</h4>


        <div className="flex flex-row items-center justify-start flex-wrap gap-[10px]">

          {
            items.map(item => (
              <div key={item.id}>
                {
                  item.images.length ? <AlbumCard albumImage={item.images[0].url} albumName={item.name} albumDetail={item.type} /> : 
                  <AlbumCard albumImage={user} albumName={item.images[0].url} albumDetail={item.type} />
                }
              </div>
            ))
          }

        </div>

      </div>

    </section>
  )
}

export default Music