import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import download from '../assets/download.png'
import bell from '../assets/bell.png'

const Header1 = () => {

  const  logout = () =>{
    window.localStorage.removeItem("token")
  }

  return (
      <section className="mx-[10px] px-[10px] py-[10px] rounded-lg flex flex-row justify-end items-center gap-[20px]">
        
        <Link to="/layout2/download" className="flex flex-row justify-center items-center gap-[10px] bg-[black] border-[1px] px-[15px] py-[5px] rounded-3xl cursor-pointer hover:bg-pink-700 hover:border-none transition duration-300">

          <img className="w-[20px] border-[1px] rounded-xl" src={download} alt="" />

          <p>Install App</p>

        </Link>

        <Link to='/layout2/new' className="flex flex-row justify-center items-center cursor-pointer bg-[#0c0606] border-[1px] px-[7px] py-[7px] rounded-full  hover:bg-pink-700 hover:border-none transition duration-300">

          <img className="w-[20px] h-[20px]" src={bell} alt=""/>

        </Link>

        <Link to="/login" onClick={logout} className="flex flex-row justify-center items-center gap-[10px] bg-[black] border-[1px] px-[15px] py-[5px] rounded-3xl cursor-pointer hover:bg-pink-700 hover:border-none transition duration-300">
          Logout
        </Link>

      </section>
  )
}

export default Header1