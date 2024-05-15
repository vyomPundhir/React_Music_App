import React from 'react'
import { NavLink } from 'react-router-dom'

const Header2 = () => {
  return (
    <section className="flex flex-row justify-start items-center gap-[20px] mx-[10px] px-[10px] py-[10px] rounded-lg">

        <NavLink to="/home/all" className={({isActive})=>`{isActive ? "text-black bg-[#ffffff]" : "text-[#979797]"} px-[15px] py-[5px] border-[1.5px] border-[#979797] rounded-3xl text-[#979797] hover:border-[#ffffff] hover:text-white transition duration-300`}>All</NavLink>

        <NavLink to="/home/music" className={({isActive})=>`{isActive ? "text-black bg-[#ffffff]" : "text-[#979797]"} px-[15px] py-[5px] border-[1.5px] border-[#979797] rounded-3xl text-[#979797] hover:border-[#ffffff] hover:text-white transition duration-300`}>Music</NavLink>

        <NavLink to="/home/podcasts" className={({isActive})=>`{isActive ? "text-black bg-[#ffffff]" : "text-[#979797]"} px-[15px] py-[5px] border-[1.5px] border-[#979797] rounded-3xl text-[#979797] hover:border-[#ffffff] hover:text-white transition duration-300`}>Podcasts</NavLink>

      </section>
  )
}

export default Header2