import React from 'react'
import pinkheadphones from "../assets/pinkheadphones.jpeg"
import Footer from "./Footer"

const Download = () => {
  return (
    <section className="flex flex-col gap-[20px] rounded-lg overflow-y-auto h-full scrollbar-thin scrollbar-track-black scrollbar-thumb-[#270a0a] px-[20px] py-[10px] ">
      <div className='flex flex-col justify-center items-center gap-[20px]'>
        <img src={pinkheadphones} alt="" className="w-[350px] h-[350px] rounded-full" />
        <p className=' text-[35px] text-center'>Seamlessly listen to music you love. Download the Spotify app for your computer.</p>
        <button className='mb-[20px] text-[17px] px-[20px] py-[10px] bg-pink-700 rounded-3xl'>Get our app</button>
      </div>
      <Footer />
    </section>
  )
}

export default Download