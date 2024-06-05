import React from 'react'

const AlbumCard = ({albumImage, albumName, albumDetail}) => {
  return (
    <div className="flex flex-col justify-center items-center w-[160px] hover:bg-[#280810] hover:shadow-[0px_5px_40px_-10px_#000000] px-[10px] py-[10px] gap-[5px] rounded-lg transition duration-300 cursor-pointer">
      <img src={albumImage} className="w-[150px] h-[150px] rounded-lg" />
      <div className="flex flex-col justify-center items-center">
        <h4 className='text-center'>{albumName}</h4>
        <p className='text-[#7c7c7c]'>{albumDetail}</p>
      </div>
    </div>

  )
}

export default AlbumCard