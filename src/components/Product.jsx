import React from 'react'
import Button from './Button'

function Product() {
  return (
    <div className='w-full py-20 '> 
      <div className='max-w-screen-xl  mx-auto flex items-center justify-between'>
         <h1 className='text-6xl capitalize font-semibold'>shanki boss</h1>
         <div className='w-1/3'>
           <p className='mb-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt ratione excepturi enim quos. Magni, ipsum molestiae?
             Inventore temporibus hic rem molestias obcaecati quasi totam assumenda nulla iste molestiae? Necessitatibus, repellendus! </p> 
             <Button />
         </div>
      </div>
    </div>
  )
}

export default Product
