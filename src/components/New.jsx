import React from 'react'
import Footer from './Footer'

const New = () => {
  return (
    <section className="flex flex-col gap-[40px] rounded-lg overflow-y-auto h-full scrollbar-thin scrollbar-track-black scrollbar-thumb-[#270a0a] px-[20px] py-[10px] ">

      <div className="flex flex-col justify-center items-start gap-[10px]">

        <header className="text-[35px] font-[700]">What's New</header>

        <p className="text-[#919191]">The latest releases from artists, podcasts and shows you follow.</p>

        <div className='flex flex-row justify-start items-center gap-[10px]'>
          <button className='mb-[20px] text-[15px] px-[15px] py-[5px] bg-pink-900 rounded-3xl hover:bg-pink-700 transition duration-300'>Music</button>
          <button className='mb-[20px] text-[15px] px-[15px] py-[5px] bg-pink-900 rounded-3xl hover:bg-pink-700 transition duration-300'>Podcasts and Shows</button>
        </div>
      </div>

      <div className='flex flex-col justify-center items-center gap-[20px]'>
        <header className="text-[30px] font-[700]">We don't have any updates for you yet</header>
        <p className="">When there’s news, we’ll post it here. Follow your favourite artists and podcasts to stay updated on them too.</p>
      </div>

      <Footer />

    </section>
  )
}

export default New