import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const Album = () => {

  const {id} = useParams();
  const [album, setAlbum] = useState(null)
  const [tracks, setTracks] = useState([])
  const token = window.localStorage.getItem("token")

  useEffect(() => {
    const fetchAlbum = async () => {
      try {
        const {data} = await axios.get(`https://api.spotify.com/v1/albums/${id}`, {
          headers:{
            Authorization: `Bearer ${token}`
          }
        });
        console.log(data)
        // setAlbum(data)
      } catch (error) {
        console.error('Error fetching Album Details', error)
      }
    };

    fetchAlbum()
  }, [id, token]);



  return (
    <div>Album</div>
  )
}

export default Album