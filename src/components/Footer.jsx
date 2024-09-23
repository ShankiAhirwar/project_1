import React from 'react'

function Footer() {
  return (
    <div className='w-full'>
       <div className='max-w-screen-xl mx-auto py-10 flex gap-40'>
           <div className='basis-1/2 '> 
               <h1 className='text-[12rem] font-semibold traking-tight leading-none'>refokus.</h1>
            </div>

            <div className='basis-1/2  flex gap-10 pt-10'>
           <div className='basis-1/3'>
            <h3 className='text-zinc-300 mb-10'>Socials</h3>
           { ['instagram',"twitter (x?)","linkedIn"].map((item,index)=> <a  key={index} className=' block mt-2 text-sm text-zinc-500 capitalize '>{item} </a> )}
           </div>

           <div className='basis-1/3'>
            <h3 className='text-zinc-300 mb-10'>Sitemap</h3>
           { ['home',"work","careers","contact"].map((item,index)=> <a  key={index} className=' block mt-2 text-sm text-zinc-400 capitalize '>{item} </a> )}
           </div>
              
              <div className='basis-1/2 flex flex-col pt-8 text-right items-end gap-10 '>
                <p className='text-sm text-zinc-200'>Refokus is pioneering digital agency driven by design and empowered by technology.</p>
                <img className='w-28' src="https://assets-global.website-files.com/5df3de8e749203dc3167a479/65369e818884afbae46a35fc_Webflow-badge.svg" alt="" />
              </div>

           </div>
          
       </div>
          <div className='w-full '>
       <div className='max-w-screen-xl mx-auto  p-2 mt- flex gap-20 '>
            {
                ["Privacy Policy","Cookie Policy","Impressum","Terms"].map((elem,index)=> <a  key={index} className='text-sm gap-10 text-zinc-400 '>{elem} </a> )
            }
           </div>
                </div>
    </div>
  )
}

export default Footer
