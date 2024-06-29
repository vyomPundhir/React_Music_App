import React, { useEffect, useState } from 'react'
import AlbumCard from './AlbumCard'
import user from "../assets/user.png"
import axios from 'axios'
import { Link } from 'react-router-dom'


const TrendingEpisodes = () => {

  const [episodes, setEpisodes] = useState([])
  let token = window.localStorage.getItem("token")

  useEffect(() => {
    const fetchEpisodes = async () => {
      try {
        const {data} = await axios.get("https://api.spotify.com/v1/episodes", {
          headers: {
            Authorization: `Bearer ${token}`
          },
          params: {
            ids: "1cIK5BD3CKvKwiCYA16XYW,3n9Sx2q65nyw4kqvtnsmhH,4p8T6BF5DTpzOoFAbcGgqZ,61a6pGV2aSY1zARRt6tvfo,4IoZZr5OejJT9bTdAHMGDq,3LLSU1jtRUrbVeeOpQz0tE,6Gl5Y62Znq3M1Fn8ywYRjz,2nLOsuQXZL4oBbzbYQYYro,5A9DkT5qoSsF909vLaOaL0,7JEJp2uiED0PsKDwf0vo77,1x1YHdOpYAjwR48eoz1yLL,6XQCOmygVsP5qt7PXFXL7p,4ZjiY5692n0Nev7q38tMvB,0ALpJ8EczwShV1p4qyo0Rj,7udYQziQP8pD0wFk46Xzwk"
          }
        });
        console.log(data)
        setEpisodes(data.episodes)

      } catch (error) {
        console.error('Error fetching trending episode', error);
      }
    };
  
    fetchEpisodes()
  }, [token])

  return (
    <section className="flex flex-col gap-[20px]">

      <div className="flex flex-col gap-[20px]">


        <h4 className="hover:cursor-pointer hover:underline text-[27px] font-[700]">Trending Episodes</h4>


        <div className="flex flex-row items-center justify-start flex-wrap gap-[10px]">

          {
            episodes.map(episode => (
        
              <Link to={`/episode/${episode.id}`} key={episode.id}>
                {
                  episode.images.length ? <AlbumCard albumImage={episode.images[0].url} albumName={episode.name} albumDetail={episode.show.name} /> : 
                  <AlbumCard albumImage={user} albumName={episode.name} albumDetail={episode.show.name} />
                }
        
              </Link>
            ))
          }

        </div>

      </div>

    </section>
  )
}

export default TrendingEpisodes