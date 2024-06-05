import React from 'react'

const ArtistCard = ({artistImage, artistName, artistDetail}) => {

  return (
    <div className="flex flex-col justify-center items-center w-[160px] hover:bg-[#280810] hover:shadow-[0px_5px_40px_-10px_#000000] px-[10px] py-[10px] gap-[5px] rounded-lg transition duration-300 cursor-pointer">
      <img src={artistImage} className="w-[150px] h-[150px] rounded-full" />
      <div className="flex flex-col justify-center items-center">
        <h4 className='text-center'>{artistName}</h4>
        <p className='text-[#7c7c7c]'>{artistDetail}</p>
      </div>
    </div>
  )
}

export default ArtistCard