import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import user from "../assets/user.png"
import ArtistCard from './ArtistCard';
import AlbumCard from './AlbumCard';

const Search = () => {
  const [artists, setArtists] = useState([]);
  const [albums, setAlbums] = useState([])
  const [episodes, setEpisodes] = useState([])
  const [tracks, setTracks] = useState([])
  const [shows, setShows] = useState([])
  const [playlists, setPlaylists] = useState([])
  const [searchKey, setSearchKey] = useState("");
  let token = window.localStorage.getItem("token")

  const search = async (e) => {
    e.preventDefault()
    const {data} = await axios.get("https://api.spotify.com/v1/search", {
      headers: {
        Authorization: `Bearer ${token}`
      },
      params: {
        q : searchKey,
        type: "artist,track,album,playlist,show,episode",
        limit: 10,
      }
    })
    console.log(data)
    setArtists(data.artists.items)
    setAlbums(data.albums.items)
    setTracks(data.tracks.items)
    setPlaylists(data.playlists.items)
    setShows(data.shows.items)
    setEpisodes(data.episodes.items)

  }

  const  logout = () => {
    window.localStorage.removeItem("token")
  }

  return (
    <section className="route w-3/4  flex flex-col justify-start gap-[30px] rounded-lg bg-gradient-to-r from-[#140404] to-black h-[517px] px-[10px] py-[10px]">
      <form onSubmit={search} className="flex flex-row justify-between items-center ">
        <input className='rounded-3xl px-[15px] py-[7px] hover:border-[1px] hover:border-[#a8a8a8] bg-[#31313162] transition duration-300 cursor-pointer w-[500px]' type="text" onChange={e => setSearchKey(e.target.value)} placeholder="Search what you want to play."/>
        <div className='flex flex-row justify-center items-center gap-[20px]'>
          <button type="submit" onClick={search} className="flex flex-row justify-center items-center gap-[10px] bg-[black] border-[1px] px-[15px] py-[5px] rounded-3xl cursor-pointer hover:bg-pink-700 hover:border-none transition duration-300">Search</button>
          <Link to="/login" onClick={logout} className="flex flex-row justify-center items-center gap-[10px] bg-[black] border-[1px] px-[15px] py-[5px] rounded-3xl cursor-pointer hover:bg-pink-700 hover:border-none transition duration-300">Logout</Link>
        </div>
      </form>

      {
        searchKey ? <div className='w-full flex flex-row flex-wrap justify-start items-center gap-[30px] overflow-y-auto scrollbar-thin scrollbar-track-black scrollbar-thumb-[#1c0707] px-[20px] py-[20px] rounded-xl'>

        {
          tracks.map(track => (
      
            <Link to={`/track/${track.id}`} key={track.id}>
              {
                track.album.images.length ? <AlbumCard albumImage={track.album.images[0].url} albumName={track.name} albumDetail={track.type} /> : 
                <AlbumCard albumImage={user} albumName={track.name} albumDetail={track.type} />
              }
      
            </Link>
          ))
        }

        {
          playlists.map(playlist => (
      
            <Link to={`/playlist/${playlist.id}`} key={playlist.id}>
              {
                playlist.images.length ? <AlbumCard albumImage={playlist.images[0].url} albumName={playlist.name} albumDetail={playlist.type} /> : 
                <AlbumCard albumImage={user} albumName={playlist.name} albumDetail={playlist.type} />
              }
      
            </Link>
          ))
        }

        {
          albums.map(album => (
      
            <Link to={`/album/${album.id}`} key={album.id}>
              {
                album.images.length ? <AlbumCard albumImage={album.images[0].url} albumName={album.name} albumDetail={album.type} /> : 
                <AlbumCard albumImage={user} albumName={album.name} albumDetail={album.type} />
              }
      
            </Link>
          ))
        }

        {
          artists.map(artist => (
      
            <Link to={`/artist/${artist.id}`} key={artist.id}>
              {
                artist.images.length ? <ArtistCard artistImage={artist.images[0].url} artistName={artist.name} artistDetail={artist.type} /> : 
                <ArtistCard artistImage={user} artistName={artist.name} artistDetail={artist.type} />
              }
      
            </Link>
          ))
        }

        {
          episodes.map(episode => (
      
            <Link to={`/episode/${episode.id}`} key={episode.id}>
              {
                episode.images.length ? <AlbumCard albumImage={episode.images[0].url} albumName={episode.name} albumDetail={episode.type} /> : 
                <AlbumCard albumImage={user} albumName={episode.name} albumDetail={episode.type} />
              }
      
            </Link>
          ))
        }

        {
          shows.map(show => (
      
            <Link to={`/show/${show.id}`} key={show.id}>
              {
                show.images.length ? <AlbumCard albumImage={show.images[0].url} albumName={show.name} albumDetail={show.type} /> : 
                <AlbumCard albumImage={user} albumName={show.name} albumDetail={show.type} />
              }
      
            </Link>
          ))
        }

        </div> : <h2 className="text-[30px] text-center flex flex-row justify-center items-center w-full h-full">Search the item you want to search</h2>
      }

    </section>
  )
}

export default Search