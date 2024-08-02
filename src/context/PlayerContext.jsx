import axios from "axios";
import { createContext, useEffect, useRef, useState } from "react";

export const PlayerContext = createContext()

const PlayerContextProvider = (props) => {

  const audioRef = useRef();
  const seekBg = useRef();
  const seekBar = useRef();
  const token = window.localStorage.getItem("token")
  const [trackItems, setTrackItems] = useState([])
  const [track, setTrack] = useState({})
  const [playStatus, setPlayStatus] = useState(false)
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const [previousVolume, setPreviousVolume] = useState(1);
  const [time, setTime] = useState(
    {
      currentTime: {
        second: 0,
        minute: 0
      },
      totalTime: {
        second:0,
        minute: 0
      }
    })

    const play =()=>{
      audioRef.current.play();
      setPlayStatus(true)
    }

    const pause =()=>{
      audioRef.current.pause();
      setPlayStatus(false)
    }

    const playWithId = async (id) => {
      try {
        const response = await axios.get(`https://api.spotify.com/v1/tracks/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
  
        setTrack(response.data);
        // console.log(response)
        audioRef.current.oncanplay = () => {
          audioRef.current.play();
          setPlayStatus(true)
        }
      } catch (error) {
        console.error('Error fetching track:', error);
      }
    }
    const handleVolumeChange = (e) => {
      const newVolume = e.target.value;
      audioRef.current.volume = newVolume;
      setVolume(newVolume);
      if (newVolume == 0) {
        setIsMuted(true);
      } else {
        setIsMuted(false);
        setPreviousVolume(newVolume);
      }
    };
  
    const toggleMute = () => {
      if (isMuted) {
        audioRef.current.volume = previousVolume;
        setVolume(previousVolume);
        setIsMuted(false);
      } else {
        setPreviousVolume(volume);
        audioRef.current.volume = 0;
        setVolume(0);
        setIsMuted(true);
      }
    };

    const redo = () => {
      audioRef.current.currentTime = 0;
      play();
    };

    useEffect(() => {
      setTimeout(()=>{
        audioRef.current.ontimeupdate = () => {
          const currentTime = audioRef.current.currentTime;
          const duration = audioRef.current.duration;

          const currentSeconds = Math.floor(currentTime % 60);
          const currentMinutes = Math.floor(currentTime / 60);
          const totalSeconds = Math.floor(duration % 60);
          const totalMinutes = Math.floor(duration / 60);

          seekBar.current.style.width = (Math.floor(audioRef.current.currentTime/audioRef.current.duration*100)) + "%"
          setTime({
            currentTime: {
              second: currentSeconds,
              minute: currentMinutes,
            },
            totalTime: {
              second: totalSeconds,
              minute: totalMinutes,
            },
          });

          // Check if the track has finished
          if (currentSeconds===totalSeconds && currentMinutes===totalMinutes) {
            setPlayStatus(false)
          }
        }
      }, 1000)
    }, [audioRef])

  const contextValue = {
    audioRef,
    seekBg,
    seekBar,
    track, setTrack,
    playStatus, setPlayStatus,
    volume, setVolume,
    isMuted, setIsMuted,
    time, setTime,
    play, pause,
    playWithId,
    toggleMute,
    handleVolumeChange,
    redo
  }

  return (
    <PlayerContext.Provider value={contextValue} >
      {props.children}
    </PlayerContext.Provider>
  )

}

export default PlayerContextProvider;