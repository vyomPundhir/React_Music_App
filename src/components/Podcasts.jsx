import React, { useEffect, useState } from 'react'
import AlbumCard from './AlbumCard'
import user from "../assets/user.png"
import axios from 'axios'

const Podcasts = () => {

  const [shows, setShows] = useState([])
  let token = window.localStorage.getItem("token")

  useEffect(() => {
    const fetchShows = async () => {
      try {
        const {data} = await axios.get("https://api.spotify.com/v1/shows", {
          headers: {
            Authorization: `Bearer ${token}`
          },
          params: {
            ids: "0A6kWKFEOFtp8fkrpnAJQB,0CteGmcUh91IrACr914hTa,1u1LNBjAd1LLRW8GXML1er,38AaGN8a1Ar4Hw1t5ZRu6t,2382o7ALF3B9J5Pplk0vwH,46Kvv4YBnd7zRdxICUwYnQ,0M8BWSzuvXbrSCyYUDVwOg,4wgaUiSz7Gh2FJrBYfn0GM,0gc3N8fFsKS8dpEEWc6Vbp,4Nj8fh6y52RFX1RZMUgAoC,1STIrhJbjN46FkzMM3fgxv,7LQSyCRGs5l5G98ILsg0CA,4BuXlpcana6xU2ctfZ3qgZ,7H4xqBcvVafN7hs3BJMeHE,1Bmx7t2vYAa1jGUeJ9f2BO,736rhmW7vilNgkFFo8aDz4,1gvanJDvoiWui0cwrB6ybZ,7Dz1UNpicFzhiEOq9gR8jJ,2bdygtPfHwoikmbcOdnZSh"
          }
        });
        console.log(data)
        setShows(data.shows)
        

      } catch (error) {
        console.error('Error fetching Podcasts', error);
      }
    };
  
    fetchShows()
  }, [token])

  return (
    <section className="flex flex-col gap-[20px]">

      <div className="flex flex-col gap-[20px]">


        <h4 className="hover:cursor-pointer hover:underline text-[27px] font-[700]">Podcasts</h4>


        <div className="flex flex-row items-center justify-start flex-wrap gap-[10px]">

          {
            shows.map(show => (
        
              <div key={show.id}>
                {
                  show.images.length ? <AlbumCard albumImage={show.images[0].url} albumName={show.name} albumDetail={show.type} /> : 
                  <AlbumCard albumImage={user} albumName={show.name} albumDetail={show.type} />
                }
              </div>
            ))
          }

        </div>

      </div>

    </section>
  )
}

export default Podcasts