import React from 'react'
import { FiArrowUpLeft } from "react-icons/fi";
import Button from './Button';

function Navbar() {
  return (
    <div className='max-w-screen-xl mx-auto  py-5 flex gap-1 items-center justify-between border-b-[1px] border-zinc-400 '>
       <div className='flex items-center'>
       <span className='text-3xl'>< FiArrowUpLeft /></span> 
       <h1 className='font-semibold'>Refokus</h1>

        <div className='links flex gap-20 ml-28 font-regular  '>

        {["Home","Work","Culture","",'News'].map((elem,index) =>( 
            elem.length === 0 ? <span  className=' w-[1px]  bg-zinc-600 '></span> :(          <a className='text-sm flex items-center gap-1' href="#">
                
                {index === 1 && (<span style={{boxShadow:"0 0 0.45em #00FF19"}} className='inline-block w-1 h-1 rounded-full bg-green-400  '></span>)}
                
                {elem}
                </a>)
  
          
        ))}
     </div>  
      
       </div>
  <Button/>
    </div>
  )
}

export default Navbar
