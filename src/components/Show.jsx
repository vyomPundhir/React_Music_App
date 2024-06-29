import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import Header1 from './Header1';
import EpisodeCard from './EpisodeCard';

const Show = () => {

  const {id} = useParams();
  const [show, setShow] = useState(null)
  const [episodes, setEpisodes] = useState([])
  const token = window.localStorage.getItem("token")

  useEffect(() => {
    const fetchShow = async () => {
      try {
        const {data} = await axios.get(`https://api.spotify.com/v1/shows/${id}`, {
          headers:{
            Authorization: `Bearer ${token}`
          }
        });
        console.log(data)
        setShow(data)
        setEpisodes(data.episodes.items)
      } catch (error) {
        console.error('Error fetching Album Details', error)
      }
    };

    fetchShow()
  }, [id, token]);

  if (!show) return <div>Loading...</div>;

  return (
    <section className="route w-3/4 flex flex-col justify-start gap-[10px] rounded-lg bg-gradient-to-r from-[#140404] to-black h-[517px] ">

      <Header1 />

      <section className="px-[15px] flex flex-col gap-[20px] overflow-y-auto h-[445px] scrollbar-thin scrollbar-track-black scrollbar-thumb-[#270a0a]">
        
        <div className="flex flex-row items-center justify-start gap-[15px]">

          <img src={show.images[0].url} alt="image" className="w-[150px] h-[150px] rounded-md" />

          <div className='flex flex-col items-start justify-start '>
            <p className='text-[13px] font-[500]'>{show.type.toUpperCase()}</p>
            <h1 className='text-[45px] font-[700]'>{show.name}</h1>
            <p className="text-[18px] font-[500]">
              {show.publisher + " | "}
              <span  className='text-[18px] font-[500]'>{show.total_episodes + " Episodes"} 
              </span>
            </p>
          </div>
        </div>

        <hr className='h-[1px] border-[#5f5f5f]' />
        
        <div className='flex flex-col gap-[10px]'>
          <div className='text-[27px] font-[700]'>About</div>
          <div className='font-[500]'>{show.description}</div>
        </div>

        <hr className='h-[1px] border-[#5f5f5f]' />

        <div className='flex flex-col gap-[10px]'>
          <div className='text-[27px] font-[700]'>All Episodes</div>
          <div className='flex flex-col gap-[10px] font-[500]'>
            <div className=''>
            {episodes.length > 0 ? (
                episodes.map((episode) => (
                  <Link to={`/episode/${episode.id}`} key={episode.id} className='flex flex-col gap-[20px] pb-[10px]'>
                    <EpisodeCard
                      ename={episode.name}
                      eimage={episode.images[0].url}
                      edes={episode.description.split(' ').slice(0, 38).join(' ') + (episode.description.split(' ').length > 38 ? '...' : '')}
                      edate={episode.release_date}
                      eshow={show.name}
                      etime={millisToMinutesAndSeconds(episode.duration_ms)}
                    />
                  </Link>
                ))
              ) : (
                <p>No episodes available</p>
              )}

            </div>
          </div>
        </div>

      </section>

    </section>
  );

}

const millisToMinutesAndSeconds = (millis) => {
  const minutes = Math.floor(millis / 60000);
  const seconds = ((millis % 60000) / 1000).toFixed(0);
  return minutes + ' min ' + seconds + " sec";
};

export default Show