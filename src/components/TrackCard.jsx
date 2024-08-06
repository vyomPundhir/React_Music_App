import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, {useContext, useState} from 'react'
import { Link } from 'react-router-dom';
import { PlayerContext } from '../context/PlayerContext'

const TrackCard = ({trackNumber, trackName, trackArtists, trackTime, trackId, albumId}) => {

  const {playAlbumWithId, playStatus, play, pause, currentTrackIndex, trackItems } = useContext(PlayerContext)
  const [isHovered, setIsHovered] = useState(false);

  const handlePlayAlbumTrack = () => {
    if (albumId) {
      playAlbumWithId(albumId);
    }
  }

  return (
    <section className='flex flex-row justify-between px-[10px] hover:bg-[#280810] hover:shadow-[0px_5px_40px_-10px_#000000] rounded-md cursor-pointer' onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}>
      <div className='flex flex-row justify-center items-center gap-[20px]'>
        <div className={`${isHovered ? 'block' : 'hidden'}`}  onClick={handlePlayAlbumTrack}>
        {
            playStatus && trackItems[currentTrackIndex]?.id === trackId ?
            <button className='w-4 cursor-pointer' onClick={pause}>
              <FontAwesomeIcon icon={faPause} />
            </button> :
            <button className='w-4 cursor-pointer' onClick={play}>
              <FontAwesomeIcon icon={faPlay} />
            </button> 
          }
        </div>
        <div className={`${isHovered ? 'hidden' : 'block'}`}>{trackNumber}</div>
        <Link to={`/track/${trackId}`}>
          <p className='hover:underline'>{trackName}</p>
          <p className='text-[14px] text-[#adadad] hover:underline'>{trackArtists}</p>
        </Link>
      </div>

      <div className='flex flex-row justify-center items-center'>{trackTime}</div>
      
    </section>
  )
}

export default TrackCard