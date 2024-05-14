import React from 'react'
import { NavLink } from 'react-router-dom'
import download from '../assets/download.png'
import bell from '../assets/bell.png'

const Navbar = () => {
  return (
    <nav className="">

      <section className="mx-[10px] px-[10px] py-[10px] rounded-lg flex flex-row justify-end items-center gap-[20px]">

        <button className="px-[15px] py-[5px] bg-pink-950 rounded-3xl cursor-pointer hover:bg-pink-700 hover:border-none transition duration-300">Sign up</button>

        <button className=" bg-pink-950 px-[25px] py-[5px] rounded-3xl cursor-pointer hover:bg-pink-700 hover:border-none transition duration-300">Login</button>

        <div className="flex flex-row justify-center items-center gap-[10px] bg-[black] border-[1px] px-[15px] py-[5px] rounded-3xl cursor-pointer hover:bg-pink-700 hover:border-none transition duration-300">

          <img className="w-[20px] border-[1px] rounded-xl" src={download} alt="" />

          <p>Install App</p>

        </div>

        <div className="flex flex-row justify-center items-center cursor-pointer bg-[#0c0606] border-[1px] px-[7px] py-[7px] rounded-full  hover:bg-pink-700 hover:border-none transition duration-300">

          <img className="w-[20px] h-[20px]" src={bell} alt=""/>

        </div>

      </section>

      <section className="flex flex-row justify-start items-center gap-[20px] mx-[10px] px-[10px] py-[10px] rounded-lg">

        <NavLink to="/home/all" className={({isActive})=>`{isActive ? "text-black bg-[#ffffff]" : "text-[#979797]"} px-[15px] py-[5px] border-[1.5px] border-[#979797] rounded-3xl text-[#979797] hover:border-[#ffffff] hover:text-white transition duration-300`}>All</NavLink>

        <NavLink to="/home/music" className={({isActive})=>`{isActive ? "text-black bg-[#ffffff]" : "text-[#979797]"} px-[15px] py-[5px] border-[1.5px] border-[#979797] rounded-3xl text-[#979797] hover:border-[#ffffff] hover:text-white transition duration-300`}>Music</NavLink>

        <NavLink to="/home/podcasts" className={({isActive})=>`{isActive ? "text-black bg-[#ffffff]" : "text-[#979797]"} px-[15px] py-[5px] border-[1.5px] border-[#979797] rounded-3xl text-[#979797] hover:border-[#ffffff] hover:text-white transition duration-300`}>Podcasts</NavLink>

      </section>
    </nav>
  )
}

export default Navbar