import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Album = () => {

  const [albumId, setAlbumId] = useState("")
  let token = window.localStorage.getItem("token") 
  let album = "0a183xiCHiC1GQd8ou7WXO"
  useEffect(() => {
    const fetchAlbum = async () => {
      try {
        const {data} = await axios.get(`https://api.spotify.com/v1/albums/${album}`, {
          headers: {
            Authorization: `Bearer ${token}`
          },
          params: {
            
          }
        });
        console.log(data)
        // setAlbums(data.albums);
      } catch (error) {
        console.error('Error fetching albums', error);
      }
    };
  
    fetchAlbum()
  }, [token])
  

  return (
    <div>
      Album
    </div>
  )
}

export default Album