import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import Header1 from './Header1';
import TrackCard from './TrackCard';

const Playlist = () => {

  const {id} = useParams();
  const [playlist, setPlaylist] = useState(null)
  const [tracks, setTracks] = useState([])
  const token = window.localStorage.getItem("token")

  useEffect(() => {
    const fetchPlaylist = async () => {
      try {
        const {data} = await axios.get(`https://api.spotify.com/v1/playlists/${id}`, {
          headers:{
            Authorization: `Bearer ${token}`
          }
        });
        console.log(data)
        setPlaylist(data)
        setTracks(data.tracks.items)
      } catch (error) {
        console.error('Error fetching Album Details', error)
      }
    };

    fetchPlaylist()
  }, [id, token]);

  if (!playlist) return <div>Loading...</div>;

  return (
    <section className="route w-3/4 flex flex-col justify-start gap-[10px] rounded-lg bg-gradient-to-r from-[#140404] to-black h-[517px] ">

      <Header1 />

      <section className="px-[15px] flex flex-col gap-[20px] overflow-y-auto h-[445px] scrollbar-thin scrollbar-track-black scrollbar-thumb-[#270a0a]">
        
        <div className="flex flex-row items-start justify-start gap-[15px]">

          <img src={playlist.images[0].url} alt="image" className="w-[150px] h-[150px] rounded-md" />

          <div className='flex flex-col items-start justify-start '>
            <p className='text-[14px] font-[500]'>{playlist.type.toUpperCase()}</p>
            <h1 className='text-[50px] font-[700]'>{playlist.name}</h1>
            <p>
              { playlist.description } <br />
              <span  className='text-[13px] font-[500]'>{playlist.followers.total + " Followers"} | {playlist.tracks.total + " Songs"}
              </span>
            </p>
          </div>
        </div>

        <hr className='h-[1px] border-[#5f5f5f]' />

        <div className="flex flex-col gap-[10px] px-[10px]">
          <div className='flex flex-row justify-between px-[10px]'>
            <span className='flex flex-row gap-[20px]'>
              <span className='text-[14px] text-[#adadad]'>#</span>
              <span className='text-[14px] text-[#adadad]'>Title</span>
            </span>
            <span className='text-[14px] text-[#adadad]'>Duration</span>
          </div>
          
          <div className=''>
          {tracks.length > 0 ? (
              tracks.map((track) => (
                <Link to={`/track/${track.track.id}`} key={track.track.id} className='flex flex-col gap-[20px] pb-[10px]'>
                  <TrackCard
                    trackNumber={tracks.indexOf(track)+1}
                    trackName={track.track.name}
                    trackArtists={track.track.artists.map((artist) => artist.name).join(', ')}
                    trackTime={millisToMinutesAndSeconds(track.track.duration_ms)}
                  />
                </Link>
              ))
            ) : (
              <p>No tracks available</p>
            )}

          </div>

        </div>

      </section>

    </section>
  );

}

const millisToMinutesAndSeconds = (millis) => {
  const minutes = Math.floor(millis / 60000);
  const seconds = ((millis % 60000) / 1000).toFixed(0);
  return minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
};

export default Playlist