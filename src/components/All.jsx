import React, { useEffect, useState } from 'react'
import AlbumCard from './AlbumCard'
import ArtistCard from './ArtistCard'
import { Link } from 'react-router-dom'
import user from "../assets/user.png"
import axios from 'axios'

const All = () => {

  const [artists, setArtists] = useState([])
  const [albums, setAlbums] = useState([])
  let token = window.localStorage.getItem("token")

  useEffect(() => {
    const fetchArtists = async () => {
      try {
        const {data} = await axios.get("https://api.spotify.com/v1/artists", {
          headers: {
            Authorization: `Bearer ${token}`
          },
          params: {
            ids : "1wRPtKGflJrBx9BmLsSwlU,4YRxDV8wJFPHPTeXepOstw,1mYsTxnqsietFxj1OgoGbG,4fEkbug6kZzzJ8eYX6Kbbp,1dVygo6tRFXC8CSWURQJq2"
          }
        });
        console.log(data)
        setArtists(data.artists);
      } catch (error) {
        console.error('Error fetching artists', error);
      }
    };

    const fetchAlbums = async () => {
      try {
        const {data} = await axios.get("https://api.spotify.com/v1/albums", {
          headers: {
            Authorization: `Bearer ${token}`
          },
          params: {
            ids : "0a183xiCHiC1GQd8ou7WXO,0Rkv5iqjF2uenfL0OVB8hg,3uuu6u13U0KeVQsZ3CZKK4,4mGz0G0d2mqGmaFc67MEEm,1VZDqgb1ALde0CFMIvEGNr"
          }
        });
        console.log(data)
        setAlbums(data.albums);
      } catch (error) {
        console.error('Error fetching albums', error);
      }
    };
  
    fetchArtists()
    fetchAlbums()
  }, [token])





  return (
    <section className="flex flex-col gap-[20px]">

      <div className="flex flex-col gap-[20px]">

        <div className="flex flex-row justify-between items-center">
          <Link to="/home/popularArtists" className="hover:cursor-pointer hover:underline text-[27px] font-[700]">Popular Artists</Link>
          <Link to="/home/popularArtists"  className="hover:cursor-pointer hover:underline ">Show all</Link>
        </div>

        <div className="flex flex-row items-center justify-start flex-wrap gap-[5px]">

          {
            artists.map(artist => (
        
              <div key={artist.id}>
                {
                  artist.images.length ? <ArtistCard artistImage={artist.images[0].url} artistName={artist.name} artistDetail={artist.type} /> : 
                  <ArtistCard artistImage={user} artistName={artist.name} artistDetail={artist.type} />
                }
        
              </div>
            ))
          }

        </div>

      </div>

      <div className="flex flex-col gap-[20px]">
        <div className="flex flex-row justify-between items-center">
          <Link to="/home/popularAlbums" className="hover:cursor-pointer hover:underline text-[27px] font-[700]">Popular Albums</Link>
          <Link to="/home/popularAlbums" className="hover:cursor-pointer hover:underline ">Show all</Link>
        </div>
        <div className="flex flex-row items-center justify-start flex-wrap gap-[5px]">
      
          {
            albums.map(album => (
        
              <div key={album.id}>
                {
                  album.images.length ? <AlbumCard albumImage={album.images[0].url} albumName={album.name} albumDetail={album.type} /> : 
                  <AlbumCard artistImage={user} albumName={album.name} albumDetail={album.type} />
                }
        
              </div>
            ))
          }

        </div>
      </div>

      <div className="flex flex-col gap-[20px]">
        <div className="flex flex-row justify-between items-center">
          <Link to="/home/popularRadio" className="hover:cursor-pointer hover:underline text-[27px] font-[700]">Popular Radio</Link>
          <Link to="/home/popularRadio" className="hover:cursor-pointer hover:underline ">Show all</Link>
        </div>
        <div className="flex flex-row items-center justify-start flex-wrap gap-[5px]">
          <AlbumCard/>
          <AlbumCard/>
          <AlbumCard/>
          <AlbumCard/>
          <AlbumCard/>
        </div>
      </div>

      <div className="flex flex-col gap-[20px]">
        <div className="flex flex-row justify-between items-center">
          <Link to="/home/featuredCharts" className="hover:cursor-pointer hover:underline text-[27px] font-[700]">Featured Charts</Link>
          <Link to="/home/featuredCharts" className="hover:cursor-pointer hover:underline ">Show all</Link>
        </div>
        <div className="flex flex-row items-center justify-start flex-wrap gap-[5px]">
          <AlbumCard/>
          <AlbumCard/>
          <AlbumCard/>
          <AlbumCard/>
          <AlbumCard/>
        </div>
      </div>

      <div className="flex flex-col gap-[20px]">
        <div className="flex flex-row justify-between items-center">
          <Link to="/home/musicPlayerPlaylists" className="hover:cursor-pointer hover:underline text-[27px] font-[700]">Music Player Playlists</Link>
          <Link to="/home/musicPlayerPlaylists" className="hover:cursor-pointer hover:underline ">Show all</Link>
        </div>
        <div className="flex flex-row items-center justify-start flex-wrap gap-[5px]">
          <AlbumCard/>
          <AlbumCard/>
          <AlbumCard/>
          <AlbumCard/>
          <AlbumCard/>
        </div>
      </div>

      <div className="flex flex-col gap-[20px]">
        <div className="flex flex-row justify-between items-center">
          <Link to="/home/originalPodcasts" className="hover:cursor-pointer hover:underline text-[27px] font-[700]">Original Podcasts</Link>
          <Link to="/home/originalPodcasts" className="hover:cursor-pointer hover:underline ">Show all</Link>
        </div>
        <div className="flex flex-row items-center justify-start flex-wrap gap-[5px]">
          <AlbumCard/>
          <AlbumCard/>
          <AlbumCard/>
          <AlbumCard/>
          <AlbumCard/>
        </div>
      </div>

      <div className="flex flex-col gap-[20px]">
        <div className="flex flex-row justify-between items-center">
          <Link to='/home/trendingEpisodes' className="hover:cursor-pointer hover:underline text-[27px] font-[700]">Trending Episodes</Link>
          <Link to='/home/trendingEpisodes' className="hover:cursor-pointer hover:underline ">Show all</Link>
        </div>
        <div className="flex flex-row items-center justify-start flex-wrap gap-[5px]">
          <AlbumCard/>
          <AlbumCard/>
          <AlbumCard/>
          <AlbumCard/>
          <AlbumCard/>
        </div>
      </div>

    </section>

  )
}

export default All