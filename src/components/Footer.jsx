import React from 'react'
import headphones from '../assets/headphones.png'
import facebook from '../assets/facebook.png'
import instagram from '../assets/instagram.png'
import twitter from '../assets/twitter.png'

const Footer = () => {
  return (
    <footer className='flex flex-row justify-between items-center px-[20px] pt-[60px] pb-[100px] border-t-[1px] border-[#484848] gap-[50px]'>

      <section className='flex flex-row gap-[10px] items-center cursor-pointer'>
        <img src={headphones} alt="Logo" className='w-[30px]' />
        <p className='hover:text-white hover:underline text-[#d9d9d9]'>MusicPlayer</p>
      </section>

      <section className="menu flex flex-row justify-center items-center gap-[20px]">
        <a href="" className='hover:text-white hover:underline text-[#d9d9d9]'>Privacy Policy</a>
        <a href="" className='hover:text-white hover:underline text-[#d9d9d9]'>Terms of Service</a>
        <a href="" className='hover:text-white hover:underline text-[#d9d9d9]'>Return Policy</a>
        <a href="" className='hover:text-white hover:underline text-[#d9d9d9]'>Contact Us</a>
      </section>

      <section className="visit flex flex-row justify-center items-center gap-[20px]">
        <img src={facebook} alt="" className='w-[20px] cursor-pointer'/>
        <img src={instagram} alt="" className='w-[20px] cursor-pointer'/>
        <img src={twitter} alt="" className='w-[20px] cursor-pointer'/>
      </section>

    </footer>
  )
}

export default Footer