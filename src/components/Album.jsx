import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Header1 from './Header1';

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
        setAlbum(data)
        setTracks(data.tracks.items)
      } catch (error) {
        console.error('Error fetching Album Details', error)
      }
    };

    fetchAlbum()
  }, [id, token]);

  if (!album) return <div>Loading...</div>;

  return (
    <section className="route w-3/4 flex flex-col justify-start gap-[10px] rounded-lg bg-gradient-to-r from-[#140404] to-black h-[517px]">

      <Header1 />

      <section className="">
        <div className="flex flex-row items-center justify-start">
          <img src={album.images[0].url} alt="image" className="w-[150px] h-[150px] rounded-md" />
          <div className='flex flex-col items-start justify-center '>
            <p>{album.type.toUpperCase()}</p>
            <h1>{album.name}</h1>
            <p>
              {
                album.artists.map(artist => (
                  <span key={artist.id}>
                    {artist.name} | </span>
                ))
              }
            </p>
          </div>
        </div>
        <div className=""></div>
      </section>

    </section>

    // <div>
    //   <h1>{album.name}</h1>
    //   <img src={album.images[0]?.url} alt={album.name} className='w-[100px] h-[100px]' />
    //   <ul>
    //     {tracks.map(track => (
    //       <li key={track.id}>{track.name}</li>
    //     ))}
    //   </ul>
    // </div>
  );

}

export default Album