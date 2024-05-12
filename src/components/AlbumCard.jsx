import React from 'react'

const AlbumCard = () => {
  return (
    <div className="flex flex-col justify-center items-center w-[160px] hover:bg-[#280810] hover:shadow-[0px_5px_40px_-10px_#000000] px-[10px] py-[10px] gap-[5px] rounded-lg transition duration-300 cursor-pointer">
      <img src="src\assets\download.jfif" className="w-[150px] h-[150px] rounded-lg" />
      <div className="flex flex-col justify-center items-center">
        <h4>Album 1</h4>
        <p>Album Detail</p>
      </div>
    </div>

  )
}

export default AlbumCard