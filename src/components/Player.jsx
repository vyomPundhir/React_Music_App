import React, { useContext } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faStepBackward, faStepForward, faRandom, faRedo, faVolumeUp, faVolumeMute, faPlus } from '@fortawesome/free-solid-svg-icons';
import { PlayerContext } from '../context/PlayerContext';

const Player = () => {
  const {track, seekBar, seekBg, playStatus, play, pause, time, isMuted, toggleMute, volume, handleVolumeChange, redo, seekSong } = useContext(PlayerContext)

  return (
    <div className='h-[10%] bg-black flex justify-between items-center text-white px-4 mt-[-25px] pb-[15px]'>
      <div className="hidden lg:flex items-center gap-4">
        <img className='w-12' src={track.album?.images[0].url} alt="image" />
        <div>
          <p className='text-[15px] w-[250px]'>{track.name}</p>
          <p className='text-[13px] w-[250px]'>{track.artists?.map((artist) => artist.name).join(', ')}</p>
        </div>
      </div>

      <div className="flex flex-col items-center gap-1 m-auto">
        <div className="flex gap-4">

          <button className='w-4 cursor-pointer'>
            <FontAwesomeIcon icon={faRandom} />
          </button>

          <button className='w-4 cursor-pointer'>
            <FontAwesomeIcon icon={faStepBackward} />
          </button>

          {
            playStatus ?
            <button className='w-4 cursor-pointer' onClick={pause}>
              <FontAwesomeIcon icon={faPause} />
            </button> :
            <button className='w-4 cursor-pointer' onClick={play}>
              <FontAwesomeIcon icon={faPlay} />
            </button> 
          }

          <button className='w-4 cursor-pointer'>
            <FontAwesomeIcon icon={faStepForward} />
          </button>

          <button className='w-4 cursor-pointer' onClick={redo}>
            <FontAwesomeIcon icon={faRedo} />
          </button>

        </div>

        <div className="flex items-center gap-5">
          <p>{time.currentTime.minute}:{time.currentTime.second}</p>
          <div ref={seekBg} onClick={seekSong} className='w-[60vw] max-w-[500px] bg-gray-300 rounded-full cursor-pointer'>
            <hr ref={seekBar} className="h-1 border-none w-0 bg-pink-700 rounded-full" />
          </div>
          <p>{time.totalTime.minute}:{time.totalTime.second}</p>
        </div>
      </div>

      <div className="hidden lg:flex items-center gap-2">
      <button onClick={toggleMute}>
        <FontAwesomeIcon icon={isMuted ? faVolumeMute : faVolumeUp} />
      </button>

      <input
      type="range"
      min="0"
      max="1"
      step="0.01"
      value={isMuted ? 0 : volume}
      onChange={handleVolumeChange} 
      className="ml-3 accent-pink-700 h-1"
      />
      </div>
    </div>
  )
}

export default Player