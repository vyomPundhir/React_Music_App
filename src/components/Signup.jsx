import React from 'react'
import headphones from '../assets/headphones.png'
import Footer from './Footer'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <section className='bg-[black] text-white'>
      <header className='px-[20px] py-[20px] border-b-[1px] border-b-[#585858]'>
        <div className='cursor-default flex flex-row justify-start items-center gap-[10px]'>
          <img src={headphones} alt="" className='w-[30px]' />
          <p>Music Player</p>
        </div>
      </header>

      <section className='flex flex-col justify-start items-center gap-[30px] bg-gradient-to-r from-[#140404] to-black pt-[10px] pb-[30px]'>

          <h3 className='text-[35px] font-[700]'>Sign up to Music Player</h3>

          <form action="" className="w-[330px] flex flex-col gap-[20px] border-[1px] border-[#575757] rounded-lg px-[30px] pb-[30px] pt-[20px]">

            <div className="flex flex-col justify-start items-start gap-[5px]">
              <label for="email">Email</label>
              <input type="email" id='email' required className="w-full bg-transparent border-[1px] rounded-md"/>
            </div>

            <div className="flex flex-col justify-start items-start gap-[5px]">
              <label htmlFor="password">Password</label>
              <input type="password" id='password' required className="w-full bg-transparent border-[1px] rounded-md"/>
            </div>

            <div className="flex flex-col justify-start items-start gap-[5px]">
              <label htmlFor="confirm">Confirm Password</label>
              <input type="password" id='confirm' required className='w-full bg-transparent border-[1px] rounded-md'/>
            </div>

            <button type="submit" className="w-full bg-pink-900 hover:bg-pink-700 transition duration-300 rounded-lg py-[5px]">Sign up</button>

          </form>

          <p className='text-white'>Already have an account? <span><Link to="/login" className="text-pink-500 hover:underline">Login</Link></span></p>

      </section>

      <Footer/>

    </section>
  )
}

export default Signup