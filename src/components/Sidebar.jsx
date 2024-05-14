import React from 'react'
import home from '../assets/home.png'
import search from '../assets/search.png'
import plus from '../assets/plus.png'
import library from '../assets/library.png'
import arrow from '../assets/right-arrow.png'
import { Link, NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <section className="side-bar flex flex-col justify-start gap-[10px] bg-transparent w-1/4 rounded-lg">

      <div className="side-menu border-[1px] border-[#740505] rounded-lg px-[20px] py-[20px] flex flex-col justify-center gap-[10px] bg-[#0c0606]">

        <NavLink to="/home/all" className={({isActive})=>`{isActive ?  "bg-pink-950" : "text-[#979797]"} flex flex-row items-center gap-[20px] hover:bg-pink-950 hover:cursor-pointer transition duration-300 px-[10px] py-[7px] rounded-lg`}>
          <img src={home} alt="" className="w-[23px]"/>
          <h4 className="font-[600] text-[17px]">Home</h4>
        </NavLink>

        <NavLink to="/search" className={({isActive})=>`{isActive ? "bg-pink-900" : "text-[#979797]"} flex flex-row items-center  gap-[20px] hover:bg-pink-950 hover:cursor-pointer transition duration-300 px-[10px] py-[7px] rounded-lg`}>
          <img src={search} alt="" className="w-[23px]" />
          <h4 className="font-[600] text-[17px]">Search</h4>
        </NavLink>

      </div>

      <div className="library border-[1px] border-[#740505] rounded-lg px-[10px] py-[20px] flex flex-col justify-center gap-[28px] bg-[#0c0606]">

        <div className="flex flex-row justify-between px-[15px]">

          <div className="flex flex-row gap-[10px] hover:cursor-pointer">
            <img src={library} alt="" className="w-[23px]" />
            <h4 className="font-[600] texyt-[17px]">Your Library</h4>
          </div>

          <div className="flex flex-row gap-[10px]">
            <img src={plus} alt="" className="rounded-full p-[3px] hover:bg-pink-950 hover:cursor-pointer transition duration-300 w-[25px] h-[25px]" />
            <img src={arrow} alt="" className="rounded-full p-[3px] hover:bg-pink-950 hover:cursor-pointer transition duration-300 w-[25px] h-[25px]" />
          </div>

        </div>

        <div className="flex flex-col justify-start items-start gap-[10px] rounded-lg overflow-y-auto h-[280px] scrollbar-thin scrollbar-track-black scrollbar-thumb-[#1c0707]">

          <div className="w-full bg-[#210707] rounded-lg flex flex-col justify-center items-start gap-[10px] px-[20px] py-[10px]">
            <h4 className="font-[600] text-[17px]">Create your first playlist</h4>
            <p className="text-[15px]">It's easy, we'll help you</p>
            <button className="text-[15px] px-[20px] py-[5px] rounded-3xl bg-pink-900 hover:bg-pink-700 transition duration-300">Create playlist</button>
          </div>

          <div className="w-full rounded-lg flex flex-col justify-center items-start gap-[10px] px-[20px] py-[10px] bg-[#210707]">
            <h4 className="font-[600] text-[17px]">Let's find some podcasts to follow</h4>
            <p className="text-[15px]">We'll help you updated on new episodes</p>
            <Link to='/home/podcasts' className="text-[15px] px-[20px] py-[5px] rounded-3xl bg-pink-900 hover:bg-pink-700 transition duration-300">Browse Podcasts</Link>
          </div>

        </div>

      </div>

    </section>
  )
}

export default Sidebar