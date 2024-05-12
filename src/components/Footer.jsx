import React from 'react'

const Footer = () => {
  return (
    <footer className='flex flex-row justify-between items-center'>

      <section className='flex flex-row gap-[10px] items-center cursor-pointer'>
        <img src="src\assets\headphones.png" alt="Logo" className='w-[30px]' />
        <p className='hover:text-white hover:underline text-[#d9d9d9]'>MusicPlayer</p>
      </section>

      <section className="menu flex flex-row justify-center items-center gap-[20px]">
        <a href="" className='hover:text-white hover:underline text-[#d9d9d9]'>Privacy Policy</a>
        <a href="" className='hover:text-white hover:underline text-[#d9d9d9]'>Terms of Service</a>
        <a href="" className='hover:text-white hover:underline text-[#d9d9d9]'>Return Policy</a>
        <a href="" className='hover:text-white hover:underline text-[#d9d9d9]'>Contact Us</a>
      </section>

      <section className="visit flex flex-row justify-center items-center gap-[20px]">
        <img src="src\assets\facebook.png" alt="" className='w-[20px] cursor-pointer'/>
        <img src="src\assets\instagram.png" alt="" className='w-[20px] cursor-pointer'/>
        <img src="src\assets\twitter.png" alt="" className='w-[20px] cursor-pointer'/>
      </section>

    </footer>
  )
}

export default Footer