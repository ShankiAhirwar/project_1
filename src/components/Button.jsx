import React from 'react'
import { PiArrowBendDownRight } from "react-icons/pi";
  function Button({title="Get Started"} ) {
  return (
    <div className='w-40 px-5 py-2 font-medium  bg-zinc-100 flex itmes-center justify-between rounded-full text-black '>
      <span className='text-sm'>{title}</span>
      <span className='font-semibold text-xl'><PiArrowBendDownRight /></span>
    </div>
  )
}

export default Button
