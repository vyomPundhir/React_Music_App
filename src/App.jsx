import React from 'react'
import Sidebar from './components/Sidebar'
import Home from './components/Home'

const App = () => {
  return (
    <section className="main w-full px-[10px] py-[10px] flex flex-row bg-[#000000] text-white h-screen gap-[10px] scrollbar-thin scrollbar-track-black scrollbar-thumb-[#1c0707]">
      <Sidebar/>
      <Home/>
    </section>
  )
}

export default App