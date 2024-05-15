import React from 'react'
import AlbumCard from './AlbumCard'
import ArtistCard from './ArtistCard'
import { Link } from 'react-router-dom'

const All = () => {
  return (
    <section className="flex flex-col gap-[20px]">

      <div className="flex flex-col gap-[20px]">

        <div className="flex flex-row justify-between items-center">
          <Link to="/home/popularArtists" className="hover:cursor-pointer hover:underline text-[27px] font-[700]">Popular Artists</Link>
          <Link to="/home/popularArtists"  className="hover:cursor-pointer hover:underline ">Show all</Link>
        </div>

        <div className="flex flex-row items-center justify-start flex-wrap gap-[5px]">

          <ArtistCard/>
          <ArtistCard/>
          <ArtistCard/>
          <ArtistCard/>
          <ArtistCard/>

        </div>

      </div>

      <div className="flex flex-col gap-[20px]">
        <div className="flex flex-row justify-between items-center">
          <Link to="/home/popularAlbums" className="hover:cursor-pointer hover:underline text-[27px] font-[700]">Popular Albums</Link>
          <Link to="/home/popularAlbums" className="hover:cursor-pointer hover:underline ">Show all</Link>
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