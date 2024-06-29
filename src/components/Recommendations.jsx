import React, { useEffect, useState } from 'react'
import AlbumCard from './AlbumCard'
import user from "../assets/user.png"
import axios from 'axios'
import { Link } from 'react-router-dom'

function PopularRadio() {

  const [recommendations, setRecommendations] = useState([])
  let token = window.localStorage.getItem("token")

  useEffect(() => {
    const fetchRecommendations = async () => {
      try {
        const {data} = await axios.get("https://api.spotify.com/v1/recommendations", {
          headers: {
            Authorization: `Bearer ${token}`
          },
          params: {
            limit: 50,
            seed_artists: "0oOet2f43PA68X5RxKobEy,1dVygo6tRFXC8CSWURQJq2,4fEkbug6kZzzJ8eYX6Kbbp",
            seed_generes: "indian,romance,party",
            seed_tracks: "24MMjyA3NLqCsDJfsn51eg,1iZLpuGMr4tn1F5bZu32Kb"
          }
        });
        console.log(data)
        setRecommendations(data.tracks)

      } catch (error) {
        console.error('Error fetching recommendations', error);
      }
    };
  
    fetchRecommendations()
  }, [token])
  

  return (
    <section className="flex flex-col gap-[20px]">

      <div className="flex flex-col gap-[20px]">


        <h4 className="hover:cursor-pointer hover:underline text-[27px] font-[700]">Recommendations</h4>


        <div className="flex flex-row items-center justify-start flex-wrap gap-[10px]">

          {
            recommendations.map(item => (
        
              <Link to={`/track/${item.id}`} key={item.id}>
                {
                  item.album.images.length ? <AlbumCard albumImage={item.album.images[0].url} albumName={item.name} albumDetail={item.album.artists[0].name} /> : 
                  <AlbumCard albumImage={user} albumName={item.album.images[0].url} albumDetail={item.album.artists[0].name} />
                }
        
              </Link>
            ))
          }

        </div>

      </div>

    </section>
  )
}

export default PopularRadio