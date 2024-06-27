import React from 'react'

const TrackCard = ({trackNumber, trackName, trackArtists, trackTime}) => {
  return (
    <section className='flex flex-row justify-between px-[10px] hover:bg-[#280810] hover:shadow-[0px_5px_40px_-10px_#000000] rounded-md'>
      <div className='flex flex-row justify-center items-center gap-[20px]'>
        <div>{trackNumber}</div>
        <div >
          <p>{trackName}</p>
          <p className='text-[14px] text-[#adadad]'>{trackArtists}</p>
        </div>
      </div>
      
      <div className='flex flex-row justify-center items-center'>{trackTime}</div>
    </section>
  )
}

export default TrackCard