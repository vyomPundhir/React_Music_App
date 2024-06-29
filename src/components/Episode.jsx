import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import Header1 from './Header1';
import EpisodeCard from './EpisodeCard';

const Episode = () => {

  const {id} = useParams();
  const [episode, setEpisode] = useState(null)
  const token = window.localStorage.getItem("token")

  useEffect(() => {
    const fetchEpisode = async () => {
      try {
        const {data} = await axios.get(`https://api.spotify.com/v1/episodes/${id}`, {
          headers:{
            Authorization: `Bearer ${token}`
          }
        });
        console.log(data)
        setEpisode(data)
      } catch (error) {
        console.error('Error fetching Episode Details', error)
      }
    };

    fetchEpisode()
  }, [id, token]);

  if (!episode) return <div>Loading...</div>;

  return (
    <section className="route w-3/4 flex flex-col justify-start gap-[10px] rounded-lg bg-gradient-to-r from-[#140404] to-black h-[517px] ">

      <Header1 />

      <section className="pb-[10px] px-[15px] flex flex-col gap-[30px] overflow-y-auto h-[445px] scrollbar-thin scrollbar-track-black scrollbar-thumb-[#270a0a]">
        
        <div className="flex flex-row items-center justify-start gap-[15px]">

          <img src={episode.images[0].url} alt="image" className="w-[150px] h-[150px] rounded-md" />

          <div className='flex flex-col items-start justify-start '>
            <p className='text-[13px] font-[500]'>{episode.type.toUpperCase()}</p>
            <h1 className='text-[45px] font-[700]'>{episode.name}</h1>
            <h1 className='text-[30px] font-[700]'>{episode.show.name}</h1>
            <h1 className='text-[20px] font-[600] mt-[10px]'>{episode.show.publisher}</h1>
            <p className="text-[18px] font-[500] mt-[20px]">
              {episode.release_date + " | "}
              <span  className='text-[18px] font-[500]'>{millisToMinutesAndSeconds(episode.duration_ms)} 
              </span>
            </p>
          </div>
        </div>

        <hr className='h-[1px] border-[#5f5f5f]' />
        
        <div className='flex flex-col gap-[10px]'>
          <div className='text-[27px] font-[700]'>Description</div>
          <div className='font-[500]'>{episode.show.description}</div>
        </div>

        <hr className='h-[1px] border-[#5f5f5f]' />
        
        <Link to={`/show/${episode.show.id}`} className='w-[150px] flex flex-row justify-center items-center gap-[10px] bg-[transparent] border-[1px] px-[15px] py-[5px] rounded-3xl cursor-pointer hover:bg-pink-700 hover:border-none transition duration-300'>
          See all episodes
        </Link>

      </section>

    </section>
  );

}

const millisToMinutesAndSeconds = (millis) => {
  const minutes = Math.floor(millis / 60000);
  const seconds = ((millis % 60000) / 1000).toFixed(0);
  return minutes + ' min ' + seconds + " sec";
};

export default Episode