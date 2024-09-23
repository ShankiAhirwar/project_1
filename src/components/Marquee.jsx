import React from 'react'

function Marquee({imageurl}) {
  return (
    <div className='flex w-full items-center gap-32 py-8 overflow-hidden flex-shrink-0  '>
      {imageurl.map((url,index)=> <img  key={index} src={url} alt="" className='flex-shrink-0 w-[10vw]' /> )}
      {imageurl.map((url,index)=> <img  key={index} src={url} alt="" className='flex-shrink-0 w-[10vw]'/> )}
    </div>
  )
}

export default Marquee
