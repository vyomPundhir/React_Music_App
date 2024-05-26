import React from 'react'
import headphones from '../assets/headphones.png'
import Footer from './Footer'
// import { authEndpoint, clientId, redirectUri, scopes } from '../spotify'

const Login = () => {
  const authEndpoint = "https://accounts.spotify.com/authorize?";
  const clientId = "d0cbd6f6defc4a418d298a3816c71ae9";
  const redirectUri = "http://localhost:5173/";
  const scopes = [
    // "user-library-read",
    // "playlist-read-private",
    'user-read-email',
    'user-read-private',
    'user-modify-playback-state',
    'user-read-playback-state',
    'user-read-currently-playing',
    'user-read-recently-played',
    'user-read-playback-position',
    'user-top-read'
  ];


  return (
    <section className='bg-[black] text-white'>
      <header className='px-[20px] py-[20px] border-b-[1px] border-b-[#585858]'>
        <div className='cursor-default flex flex-row justify-start items-center gap-[10px]'>
          <img src={headphones} alt="" className='w-[30px]' />
          <p>Music Player</p>
        </div>
      </header>

      <section className='flex flex-col justify-center items-center gap-[50px] bg-gradient-to-r from-[#140404] to-black h-[450px] py-[10px]'>

          <h3 className='text-[35px] font-[700]'>Login to Music Player</h3>

          <form action="" className="w-[330px] flex flex-col gap-[20px] border-[1px] border-[#575757] rounded-lg px-[30px] pb-[30px] pt-[20px]">
            
            <div className='text-center text-[#7e7d7d]'>Click on the Button to Login to Music Player</div>
            <a href={`${authEndpoint}client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`} className="w-full bg-pink-900 hover:bg-pink-700 transition duration-300 rounded-lg py-[5px] text-center">Login</a>

          </form>

      </section>

      <Footer/>

    </section>
  )
}

export default Login