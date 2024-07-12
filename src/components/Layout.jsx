import React, { useContext } from 'react'
import Sidebar from './Sidebar'
import { Outlet, useNavigate } from 'react-router-dom'
import Player from './Player';
import { PlayerContext } from '../context/PlayerContext';

const Layout = () => {
  const navigate = useNavigate();
  React.useEffect(()=>{
    navigate('/home/all');
  }, []);

  const {audioRef, track} = useContext(PlayerContext)

  return (
    <>
      <section className="main w-full px-[10px] py-[10px] flex flex-row bg-[#000000] text-white h-screen gap-[10px] scrollbar-thin scrollbar-track-black scrollbar-thumb-[#1c0707]">
        <Sidebar/>
        <Outlet />
      </section>
      <Player/>
      <audio ref={audioRef} src={track.preview_url} preload='auto'></audio>
    </>
    
  )
}

export default Layout
