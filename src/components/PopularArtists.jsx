import React, { useEffect, useState } from 'react'
import ArtistCard from './ArtistCard'
import user from "../assets/user.png"
import axios from 'axios'
import { Link } from 'react-router-dom'

const PopularArtists = () => {

  const [artists, setArtists] = useState([])
  let token = window.localStorage.getItem("token")

  useEffect(() => {
    const fetchArtists = async () => {
      try {
        const {data} = await axios.get("https://api.spotify.com/v1/artists", {
          headers: {
            Authorization: `Bearer ${token}`
          },
          params: {
            ids : "1wRPtKGflJrBx9BmLsSwlU,4YRxDV8wJFPHPTeXepOstw,1mYsTxnqsietFxj1OgoGbG,4zCH9qm4R2DADamUHMCa6O,5wJ1H6ud777odtZl5gG507,0y59o4v8uw5crbN9M3JiL1,6Mv8GjQa7LKUGCAqa9qqdb,1mBydYMVBECdDmMfE2sEUO,2oSONSC9zQ4UonDKnLqksx,2FKWNmZWDBZR4dE5KX4plR,70B80Lwx2sxti0M1Ng9e8K,6WOdPJmexxFINcKMkP2jMG,4fEkbug6kZzzJ8eYX6Kbbp,4f7KfxeHq9BiylGmyXepGt,1dVygo6tRFXC8CSWURQJq2,74OaRjmyh0XyRZsQQQ5l7c,1SJOL9HJ08YOn92lFcYf8a,5r3wPya2PpeTTsXsGhQU8O,09UmIX92EUH9hAK4bxvHx6,6LEG9Ld1aLImEFEVHdWNSB"
          }
        });
        console.log(data)
        setArtists(data.artists);
      } catch (error) {
        console.error('Error fetching artists', error);
      }
    };
  
    fetchArtists()
  }, [token])

  return (
    <section className="flex flex-col gap-[20px]">

      <div className="flex flex-col gap-[20px]">


        <h4 className="hover:cursor-pointer hover:underline text-[27px] font-[700]">Popular Artists</h4>


        <div className="flex flex-row items-center justify-start flex-wrap gap-[10px]">

        {
          artists.map(artist => (
      
            <Link to={`/artist/${artist.id}`} key={artist.id}>
              {
                artist.images.length ? <ArtistCard artistImage={artist.images[0].url} artistName={artist.name} artistDetail={artist.type} /> : 
                <ArtistCard artistImage={user} artistName={artist.name} artistDetail={artist.type} />
              }
      
            </Link>
          ))
        }

        </div>

      </div>

    </section>
  )
}

export default PopularArtists