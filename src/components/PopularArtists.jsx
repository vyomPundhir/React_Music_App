import React from 'react'
import ArtistCard from './ArtistCard'

const PopularArtists = () => {
  return (
    <section className="flex flex-col gap-[20px]">

      <div className="flex flex-col gap-[20px]">


        <h4 className="hover:cursor-pointer hover:underline text-[27px] font-[700]">Popular Artists</h4>


        <div className="flex flex-row items-center justify-start flex-wrap gap-[10px]">

          <ArtistCard/>
          <ArtistCard/>
          <ArtistCard/>
          <ArtistCard/>
          <ArtistCard/>
          <ArtistCard/>
          <ArtistCard/>
          <ArtistCard/>
          <ArtistCard/>
          <ArtistCard/>
        </div>

      </div>

    </section>
  )
}

export default PopularArtists