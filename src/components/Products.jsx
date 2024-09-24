import React, { useState } from 'react'
import Product from './Product'
import { motion } from 'framer-motion'

function Products() {

    const products =[
        {
            title:'arqitel' ,description:'With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.',live:true, case:false

        },
        {
            title:'TTR' ,description:'We have created an interactive site using generative AI to allow users to engage with our thinking about Ai, industry trends and design.',live:true, case:false

        },
        {
            title:'YIR 2022' ,description:'Our second year was filled with great events, exciting projects, awards and amazing people - so we made another showcase to celebrate.',live:true, case:true

        },
        {
            title:'Yahoo!' ,description:'We enhanced the New York Fashion Week, by creating a fully digital AR fashion experience for Yahoo and Maisie Wilen, featuring holographic 3D models and an integrated web shop.',live:true, case:true

        },
        {
            title:'Rainfall' ,description:'We crafted a website for Rainfall Ventures, developing prototypes and custom code that ultimately allows their team to update content regularly and with ease.',live:true, case:true

        },
    ]

    const[pos,setpos]=useState()
    const mover = (val)=>{
        setpos(val*23)

    }

  return (
    <div className='mt-32 relative'>

        {products.map((product, index) => (
            <Product key={index} product={product} mover={mover} count={index} />
        ))}
      <div  className='h-full w-full  absolute top-0 pointer-events-none '>
        <motion.div initial={{y:pos, x:"-50%"}}
        animate={{y:pos+"rem"}}
        transition={{ease:[0.76, 0, 0.24, 1],duretion:.6}}
         className='w-[33rem] h-[23rem]  absolute left-[44%] rounded-xl  overflow-hidden'>
         
           < motion.div animate={{y:-pos+"rem"}} transition={{ease:[0.76, 0, 0.24, 1],duretion:.5}} className='w-full h-full  '><video src="public/arqitel-94yUcBU8.mp4"></video></ motion.div>
           < motion.div animate={{y:-pos+"rem"}} transition={{ease:[0.76, 0, 0.24, 1],duretion:.5}} className='w-full h-full '><video src="public/ttr-lEHQxwYz.mp4"></video></ motion.div>
           < motion.div animate={{y:-pos+"rem"}} transition={{ease:[0.76, 0, 0.24, 1],duretion:.5}} className='w-full h-full '><video src="public/yir-cyYkW6sc.mp4"></video></ motion.div>
           < motion.div animate={{y:-pos+"rem"}} transition={{ease:[0.76, 0, 0.24, 1],duretion:.5}} className='w-full h-full '><video src="public/yahoo--1sy27pr.mp4"></video></ motion.div>
           < motion.div animate={{y:-pos+"rem"}} transition={{ease:[0.76, 0, 0.24, 1],duretion:.5}} className='w-full h-full '><video src="public/rainfall-WQuxxtU2.mp4"></video></ motion.div>

        </motion.div>
      </div>
    </div>
  )
}

export default Products
