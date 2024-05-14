import React from 'react'
import Sidebar from './Sidebar'
import { Outlet, useNavigate } from 'react-router-dom'

const Layout = () => {
  const navigate = useNavigate();
  React.useEffect(()=>{
    navigate('/home/all');
  }, []);


  return (
    <section className="main w-full px-[10px] py-[10px] flex flex-row bg-[#000000] text-white h-screen gap-[10px] scrollbar-thin scrollbar-track-black scrollbar-thumb-[#1c0707]">
      <Sidebar/>
      <Outlet />
    </section>
  )
}

export default Layout
