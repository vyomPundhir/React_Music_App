import React from 'react'

const EpisodeCard = ({eimage, ename, eshow, edes, edate, etime}) => {
  return (
    <section className='px-[15px] py-[10px] hover:bg-[#280810] hover:shadow-[0px_5px_40px_-10px_#000000] gap-[5px] rounded-lg transition duration-300 cursor-pointer'>
      <div className='flex flex-row justify-start items-center gap-[15px]'>
        <img src={eimage} alt="" className='w-[100px] h-[100px] rounded-sm'/>
        <div className='flex flex-col gap-[10px]'>
          <div>
            <h1>{ename}</h1>
            <p className='text-[14px] font-[500] text-[#979797]'>{eshow}</p>
          </div>
          
          <div className='text-[14px] font-[400] text-[#979797]'>{edes}</div>

          <div className='text-[15px] font-[400]'>
            <span>{edate + " | "}</span>
            <span>{etime}</span>
          </div>
        </div>
      </div>
      
      
    </section>
  )
}

export default EpisodeCard