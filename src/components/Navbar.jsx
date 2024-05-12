import React from 'react'

const Navbar = () => {
  return (
    <nav className="">

      <section className="mx-[10px] px-[10px] py-[10px] rounded-lg flex flex-row justify-end items-center gap-[20px]">

        <button className="px-[15px] py-[5px] bg-pink-950 rounded-3xl cursor-pointer hover:bg-pink-700 hover:border-none transition duration-300">Sign up</button>

        <button className=" bg-pink-950 px-[25px] py-[5px] rounded-3xl cursor-pointer hover:bg-pink-700 hover:border-none transition duration-300">Login</button>

        <div className="flex flex-row justify-center items-center gap-[10px] bg-[black] border-[1px] px-[15px] py-[5px] rounded-3xl cursor-pointer hover:bg-pink-700 hover:border-none transition duration-300">

          <img className="w-[20px] border-[1px] rounded-xl" src="src\assets\download.png" alt=""/>

          <p>Install App</p>

        </div>

        <div className="flex flex-row justify-center items-center cursor-pointer bg-[#0c0606] border-[1px] px-[7px] py-[7px] rounded-full  hover:bg-pink-700 hover:border-none transition duration-300">

          <img className="w-[20px] h-[20px]" src="src\assets\bell.png" alt=""/>

        </div>

      </section>

      <section className="flex flex-row justify-start items-center gap-[20px] mx-[10px] px-[10px] py-[10px] rounded-lg">

        <a href="/home/all" className="px-[15px] py-[5px] border-[1.5px] border-[#979797] rounded-3xl text-[#979797] hover:border-[#ffffff] hover:text-white transition duration-300">All</a>

        <a href="/home/music" className="px-[15px] py-[5px] border-[1.5px] border-[#979797] rounded-3xl text-[#979797] hover:border-[#ffffff] hover:text-white transition duration-300">Music</a>

        <a href="/home/podcasts" className="px-[15px] py-[5px] border-[1.5px] border-[#979797] rounded-3xl text-[#979797] hover:border-[#ffffff] hover:text-white transition duration-300">Podcasts</a>

      </section>
    </nav>
  )
}

export default Navbar