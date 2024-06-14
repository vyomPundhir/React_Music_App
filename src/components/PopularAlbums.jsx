import React, { useEffect, useState } from 'react'
import AlbumCard from './AlbumCard'
import user from "../assets/user.png"
import axios from 'axios'
import { Link } from 'react-router-dom'

const PopularAlbums = () => {

  const [albums, setAlbums] = useState([])
  let token = window.localStorage.getItem("token")

  useEffect(() => {
    const fetchAlbums = async () => {
      try {
        const {data} = await axios.get("https://api.spotify.com/v1/albums", {
          headers: {
            Authorization: `Bearer ${token}`
          },
          params: {
            ids : "0a183xiCHiC1GQd8ou7WXO,0Rkv5iqjF2uenfL0OVB8hg,3uuu6u13U0KeVQsZ3CZKK4,4mGz0G0d2mqGmaFc67MEEm,1VZDqgb1ALde0CFMIvEGNr,5mZX4EMwEyohNmVfLTDtXn,2Lxoc72vRTGdQfMvj7Ovi1,7sVzilmsqYcLMYw2gtvoZM,5AivaZj0CiQJoDWqVH2pbh,3RZxrS2dDZlbsYtMRM89v8,4MBCBnMZyFFv8Ch9elmLsL,1R72FwrqoofsuAM2xil26G,4kIPlpwEZBK9JaI9pZHe79,2DKSZvMj7Da6rzNVPMgREj,6XgV61OBbr8gHlXdAQ89Sj,3LyafXRRJVEfcjTMr1N8Mu"
          }
        });
        console.log(data)
        setAlbums(data.albums);
      } catch (error) {
        console.error('Error fetching albums', error);
      }
    };
  
    fetchAlbums()
  }, [token])

  return (
    <section className="flex flex-col gap-[20px]">

      <div className="flex flex-col gap-[20px]">


        <h4 className="hover:cursor-pointer hover:underline text-[27px] font-[700]">Popular Albums</h4>


        <div className="flex flex-row items-center justify-start flex-wrap gap-[10px]">

          {
            albums.map(album => (
        
              <Link to="/album" key={album.id}>
                {
                  album.images.length ? <AlbumCard albumImage={album.images[0].url} albumName={album.name} albumDetail={album.type} /> : 
                  <AlbumCard albumImage={user} albumName={album.name} albumDetail={album.type} />
                }
        
              </Link>
            ))
          }

        </div>

      </div>

    </section>
  )
}

export default PopularAlbums