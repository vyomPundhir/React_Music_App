import axios from 'axios'
import React, { useState } from 'react'
import Footer from './Footer';
import { Link } from 'react-router-dom';
import user from "../assets/user.png"

const Search = () => {
  const [artists, setArtists] = useState([])
  const [searchKey, setSearchKey] = useState("");
  const token = window.localStorage.getItem("token")

  const searchArtists = async (e) => {
    e.preventDefault()
    const {data} = await axios.get("https://api.spotify.com/v1/search", {
      headers: {
        Authorization: `Bearer ${token}`
      },
      params: {
        q : searchKey,
        type: "artist"
      }
    })
    setArtists(data.artists.items)
  }

  const renderArtists = () => {
    return artists.map(artist => (
      <div key={artist.id} className="flex flex-col justify-center items-center w-[160px] hover:bg-[#280810] hover:shadow-[0px_5px_40px_-10px_#000000] px-[10px] py-[10px] gap-[5px] rounded-lg transition duration-300 cursor-pointer">
        {artist.images.length ? <img className='w-[150px] h-[150px] rounded-lg' src={artist.images[0].url}/> : <img className='w-[150px] h-[150px] rounded-lg' src={user}/>}
        {artist.name}
      </div>
    ))
  }

  const  logout = () => {
    token = window.localStorage.removeItem("token")
  }

  return (
    <section className="route w-3/4  flex flex-col justify-start gap-[30px] rounded-lg bg-gradient-to-r from-[#140404] to-black h-[517px] px-[10px] py-[10px]">
      <form onSubmit={searchArtists} className="flex flex-row justify-between items-center">
        <input className='rounded-3xl px-[15px] py-[7px] hover:border-[1px] hover:border-[#a8a8a8] bg-[#31313162] transition duration-300 cursor-pointer w-[500px]' type="text" onChange={e => setSearchKey(e.target.value)} placeholder="Search what you want to play."/>
        <div className='flex flex-row justify-center items-center gap-[20px]'>
          <button type={"submit"} className="flex flex-row justify-center items-center gap-[10px] bg-[black] border-[1px] px-[15px] py-[5px] rounded-3xl cursor-pointer hover:bg-pink-700 hover:border-none transition duration-300">Search</button>
          <Link to="/login" onClick={logout} className="flex flex-row justify-center items-center gap-[10px] bg-[black] border-[1px] px-[15px] py-[5px] rounded-3xl cursor-pointer hover:bg-pink-700 hover:border-none transition duration-300">Logout</Link>
        </div>
      </form>

      {
        searchKey ? <div className='w-full flex flex-row flex-wrap justify-start items-center gap-[30px] overflow-y-auto scrollbar-thin scrollbar-track-black scrollbar-thumb-[#1c0707] px-[20px] py-[20px] rounded-xl'>
        {
          renderArtists()
        }
      </div> : <h2 className="text-[30px] text-center flex flex-row justify-center items-center w-full h-full">Search the item you want to search</h2>

      }

      
      
    </section>
  )
}

export default Search