import React from 'react'
import Navbar from './Navbar'
// import All from './All'
// import Music from './Music'
import Podcasts from './Podcasts'
import Footer from './Footer'

const Home = () => {
  return (
      <section className="route w-3/4  flex flex-col justify-start gap-[10px] rounded-lg bg-gradient-to-r from-[#140404] to-black h-[517px] ">

        <Navbar/>

        <section className="flex flex-col gap-[20px] rounded-lg overflow-y-auto h-[375px] scrollbar-thin scrollbar-track-black scrollbar-thumb-[#270a0a] my-[20px] px-[20px] py-[10px] ">

          {/* <All/> */}
          {/* <Music/> */}
          <Podcasts/>
          <Footer/>

        </section>

      </section>
  )
}

export default Home