import React from 'react'

function Stripe(val) {

    

  return (
    <div className='w-[16.666%] py-6 px-4 border-b-[1px] border-t-[1px] border-r-[1px] border-zinc-200 flex justify-between items-center'>
   <img src={val.url} alt="" />
      <span className='font-semibold'>{val.number}</span>
    </div>
  )
}

export default Stripe
