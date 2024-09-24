import { motion } from 'framer-motion'
import React from 'react'

function Marquee({imageurl,direction}) {
  return (
    
    <div className='flex w-full  overflow-hidden   '>
      <motion.div
       initial={{x:direction === 'left' ? '0' :'-100%'}}
       animate={{x:direction === 'left' ? '-100%':'0'}}
        transition={{ease:'linear',duration:'20',repeat:Infinity}}
        className='flex  pr-40 gap-40 py-10 flex-shrink-0  '>
      {imageurl.map((url,index)=>(
         <img key={index} src={url} alt="" className='' /> ))}
     </motion.div>

     <motion.div initial={{x:direction === 'left' ?'0':'-100%'}}
       animate={{x:direction === 'left' ? '-100%':'0'}}
        transition={{ease:'linear',duration:'20',repeat:Infinity}}
        className='flex  pr-40 gap-40 py-10 flex-shrink-0  '>
      {imageurl.map((url,index)=>(
         <img key={index} src={url} alt="" className='' /> ))}
     </motion.div>
     
    
    </div>
  )
}

export default Marquee
