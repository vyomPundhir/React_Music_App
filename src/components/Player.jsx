import React, { useContext } from 'react'
// import {download} from "../assets/download.jfif"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faStepBackward, faStepForward, faRandom, faRedo, faVolumeUp, faVolumeMute, faPlus } from '@fortawesome/free-solid-svg-icons';
import { PlayerContext } from '../context/PlayerContext';

const Player = () => {

  const {track, seekBar, seekBg, playStatus, play, pause, time} = useContext(PlayerContext)

  return (
    <div className='h-[10%] bg-black flex justify-between items-center text-white px-4 mt-[-25px] pb-[15px]'>
      <div className="hidden lg:flex items-center gap-4">
        <img className='w-12' src={track.album?.images[0].url} alt="image" />
        <div>
          <p>{track.name}</p>
          <p>{track.artists?.map((artist) => artist.name).join(', ')}</p>
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

          <button className='w-4 cursor-pointer'>
            <FontAwesomeIcon icon={faRedo} />
          </button>

        </div>

        <div className="flex items-center gap-5">
          <p>{time.currentTime.minute}:{time.currentTime.second}</p>
          <div ref={seekBg} className='w-[60vw] max-w-[500px] bg-gray-300 rounded-full cursor-pointer'>
            <hr ref={seekBar} className="h-1 border-none w-0 bg-pink-700 rounded-full" />
          </div>
          <p>{time.totalTime.minute}:{time.totalTime.second}</p>
        </div>
      </div>

      <div className="hidden lg:flex items-center gap-2 opacity-75">
      <button>
        <FontAwesomeIcon icon={faVolumeUp} />
      </button>
      <div className="w-20 bg-slate-50 h-1 rounded"></div>
      <input
      type="range"
      min="0"
      max="1"
      step="0.01"
      // value={volume}
      // onChange={handleVolumeChange}
      className="ml-2"
      />
      </div>
    </div>
  )
}

export default Player



// import React, { useEffect, useRef, useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faPlay, faPause, faStepBackward, faStepForward, faRandom, faRedo, faVolumeUp, faVolumeMute, faPlus } from '@fortawesome/free-solid-svg-icons';

// const Player = () => {
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [currentTime, setCurrentTime] = useState(0);
//   const [duration, setDuration] = useState(0);
//   const [volume, setVolume] = useState(1);
//   const [isMuted, setIsMuted] = useState(false); 
//   const [previousVolume, setPreviousVolume] = useState(1);
//   const audioRef = useRef(null);

//   const togglePlayPause = () => {
//     if (isPlaying) {
//       audioRef.current.pause();
//     } else {
//       audioRef.current.play();
//     }
//     setIsPlaying(!isPlaying);
//   };

//   useEffect(() => {
//     const audio = audioRef.current;

//     const updateTime = () => {
//       setCurrentTime(audio.currentTime);
//     };

//     const setAudioData = () => {
//       setDuration(audio.duration);
//     };

//     audio.addEventListener('timeupdate', updateTime);
//     audio.addEventListener('loadedmetadata', setAudioData);

//     return () => {
//       audio.removeEventListener('timeupdate', updateTime);
//       audio.removeEventListener('loadedmetadata', setAudioData);
//     };
//   }, []);

//   const handleSliderChange = (e) => {
//     const newTime = e.target.value;
//     audioRef.current.currentTime = newTime;
//     setCurrentTime(newTime);
//   };

//   const handleVolumeChange = (e) => {
//     const newVolume = e.target.value;
//     audioRef.current.volume = newVolume;
//     setVolume(newVolume);
//     if (newVolume == 0) {
//       setIsMuted(true);
//     } else {
//       setIsMuted(false);
//       setPreviousVolume(newVolume);
//     }
//   };

//   const toggleMute = () => {
//     if (isMuted) {
//       audioRef.current.volume = previousVolume;
//       setVolume(previousVolume);
//       setIsMuted(false);
//     } else {
//       setPreviousVolume(volume);
//       audioRef.current.volume = 0;
//       setVolume(0);
//       setIsMuted(true);
//     }
//   };

//   const formatTime = (time) => {
//     const minutes = Math.floor(time / 60);
//     const seconds = Math.floor(time % 60);
//     return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
//   };

//   return (
//     <div className="fixed bottom-0 left-0 w-full bg-gray-900 text-white p-4 flex items-center justify-between">
//       <audio ref={audioRef} src="https://p.scdn.co/mp3-preview/e0e74d21c75bb154407b8365e8df62f656a534d6?cid=d0cbd6f6defc4a418d298a3816c71ae9"></audio>
//       {/* Left Section: Current Track Info */}
//       <div className="flex items-center">
//         <img src="track-image-url" alt="Current Track" className="w-16 h-16 object-cover mr-4" />
//         <div>
//           <div className="text-sm font-semibold">Track Name</div>
//           <div className="text-xs text-gray-400">Artist Names</div>
//         </div>
//         <button className="ml-4">
//           <FontAwesomeIcon icon={faPlus} />
//         </button>
//       </div>

//       {/* Middle Section: Player Controls */}
//       <div className="flex flex-col items-center w-1/2">
//         <div className="flex items-center space-x-4">
//           <button>
//             <FontAwesomeIcon icon={faRandom} />
//           </button>
//           <button>
//             <FontAwesomeIcon icon={faStepBackward} />
//           </button>
//           <button className="w-10 h-10 flex items-center justify-center bg-white text-gray-900 rounded-full"
//             onClick={togglePlayPause}
//           >
//             <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} />
//           </button>
//           <button>
//             <FontAwesomeIcon icon={faStepForward} />
//           </button>
//           <button>
//             <FontAwesomeIcon icon={faRedo} />
//           </button>
//         </div>
//         <div className="flex items-center w-full mt-2">
//           <span className="text-xs text-gray-400">{formatTime(currentTime)}</span>
//           <input
//             type="range"
//             min="0"
//             max={duration}
//             value={currentTime}
//             step="0.01"
//             onChange={handleSliderChange}
//             className="w-full mx-2" 
//           />
//           <span className="text-xs text-gray-400">
//             {formatTime(duration)}
//           </span>
//         </div>
//       </div>

//       {/* Right Section: Volume Controls */}
//       <div className="flex items-center">
//         <button onClick={toggleMute}>
//           <FontAwesomeIcon icon={isMuted ? faVolumeMute : faVolumeUp} />
//         </button>
//         <input
//           type="range"
//           min="0"
//           max="1"
//           step="0.01"
//           value={volume}
//           onChange={handleVolumeChange}
//           className="ml-2"
//         />
//       </div>
//     </div>
//   );
// };

// export default Player;
