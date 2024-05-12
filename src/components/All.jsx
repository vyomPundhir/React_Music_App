import React from 'react'
import AlbumCard from './AlbumCard'
import ArtistCard from './ArtistCard'

const All = () => {
  return (
    <section className="flex flex-col gap-[20px]">

      <div className="flex flex-col gap-[20px]">

        <div className="flex flex-row justify-between items-center">
          <h4 className="hover:cursor-pointer hover:underline text-[27px] font-[700]">Popular Artists</h4>
          <h4 className="hover:cursor-pointer hover:underline ">Show all</h4>
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
          <h4 className="hover:cursor-pointer hover:underline text-[27px] font-[700]">Popular Albums</h4>
          <h4 className="hover:cursor-pointer hover:underline ">Show all</h4>
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
          <h4 className="hover:cursor-pointer hover:underline text-[27px] font-[700]">Popular Radio</h4>
          <h4 className="hover:cursor-pointer hover:underline ">Show all</h4>
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
          <h4 className="hover:cursor-pointer hover:underline text-[27px] font-[700]">Featured Charts</h4>
          <h4 className="hover:cursor-pointer hover:underline ">Show all</h4>
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
          <h4 className="hover:cursor-pointer hover:underline text-[27px] font-[700]">Spotify Playlists</h4>
          <h4 className="hover:cursor-pointer hover:underline ">Show all</h4>
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
          <h4 className="hover:cursor-pointer hover:underline text-[27px] font-[700]">Spotify Original Podcasts</h4>
          <h4 className="hover:cursor-pointer hover:underline ">Show all</h4>
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
          <h4 className="hover:cursor-pointer hover:underline text-[27px] font-[700]">Trending Episodes</h4>
          <h4 className="hover:cursor-pointer hover:underline ">Show all</h4>
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