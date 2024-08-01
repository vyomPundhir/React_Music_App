import axios from "axios";
import { createContext, useEffect, useRef, useState } from "react";

export const PlayerContext = createContext()

const PlayerContextProvider = (props) => {

  const audioRef = useRef();
  const seekBg = useRef();
  const seekBar = useRef();
  const token = window.localStorage.getItem("token")

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

    useEffect(() => {
      const audio = audioRef.current;
  
      const handleTimeUpdate = () => {
        seekBar.current.style.width = `${Math.floor((audio.currentTime / audio.duration) * 100)}%`;
        setTime({
          currentTime: {
            second: Math.floor(audio.currentTime % 60),
            minute: Math.floor(audio.currentTime / 60),
          },
          totalTime: {
            second: Math.floor(audio.duration % 60),
            minute: Math.floor(audio.duration / 60),
          },
        });
      };
  
      const handleEnded = () => {
        setPlayStatus(false);
      };
  
      audio.ontimeupdate = handleTimeUpdate;
      audio.onended = handleEnded;
  
      return () => {
        audio.ontimeupdate = null;
        audio.onended = null;
      };
    }, [audioRef]);

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
    handleVolumeChange
  }

  return (
    <PlayerContext.Provider value={contextValue} >
      {props.children}
    </PlayerContext.Provider>
  )

}

export default PlayerContextProvider;