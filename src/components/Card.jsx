import React from 'react'
import { HiArrowLongRight } from "react-icons/hi2";
function Card( {wirth,start,para,hover}) {
  return (
    <div className={`gap-3 bg-zinc-700 rounded-xl p-5 hover:${hover}  ${wirth} min-h-[30rem] flex flex-col justify-between  `}>
      <div>
      <div className=' flex justify-between items-center'>
        <h2>hello</h2> 
        <HiArrowLongRight />
      </div>
      <h1 className='text-3xl mt-5 font-medium'>isddvhoes</h1>
      </div>
            <div className='w-full down'>
               <>
                {start === true && (
                    <>
                    <h1 className='text-7xl font-semibold traking-tighter '>Start a project
                </h1>
                <button className='px-5 py-1 rounded-full   border-[1px] text-white mt-5 '>
                    Contact Us
                </button>
                
                 </>
                 )}
                 </>

                 {para === true && (<p className='text-sm text-zinc-400  mt-5'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing.
                 </p>)}
                 
            </div>
    </div>
  )
}

export default Card
