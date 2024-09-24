import React from 'react'
import Button from './Button'

function Product({product,mover ,count}) {
  return (
    <div className='w-full py-20 h-[23rem] '> 


      <div  onMouseEnter={()=>{mover(count)}} className='max-w-screen-xl  mx-auto flex items-center justify-between'>
         <h1 className='text-6xl capitalize font-semibold'>{product.title}</h1>
         <div className='w-1/3'>
           <p className='mb-10'>{product.description} </p> 
             <div className='flex itmes-center gap-5'>
              {product.live && <Button />}
              {product.case && <Button title="Case Study" />}
             </div>
         </div> 
      </div>
    </div>
  )
}

export default Product
