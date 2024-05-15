import React from 'react'
import AlbumCard from './AlbumCard'

const OriginalPodcasts = () => {
  return (
    <section className="flex flex-col gap-[20px]">

      <div className="flex flex-col gap-[20px]">


        <h4 className="hover:cursor-pointer hover:underline text-[27px] font-[700]">Original Podcasts</h4>


        <div className="flex flex-row items-center justify-start flex-wrap gap-[10px]">

          <AlbumCard/>
          <AlbumCard/>
          <AlbumCard/>
          <AlbumCard/>
          <AlbumCard/>
          <AlbumCard/>
          <AlbumCard/>
          <AlbumCard/>
          <AlbumCard/>
          <AlbumCard/>
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

export default OriginalPodcasts