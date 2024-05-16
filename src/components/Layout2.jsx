import React from 'react'
import { Outlet } from 'react-router-dom'
import Header1 from './Header1'

const Layout2 = () => {
  return (
    <section className="route w-3/4 flex flex-col justify-start gap-[10px] rounded-lg bg-gradient-to-r from-[#140404] to-black h-[517px] ">
      <Header1/>
      <Outlet/>
      
    </section>
  )
}

export default Layout2