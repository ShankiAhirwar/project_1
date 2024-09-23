import React from 'react'
import Navbar from './components/Navbar'
import Work from './components/Work'
import Stripes from './components/Stripes'
import Products from './components/Products'

function App() {
  return (
    <div className='w-full h-full bg-zinc-900 font-[satoshi_black] text-white '>
     <Navbar />
      <Work />
      <Stripes />
      <Products />
    </div>
  )
}

export default App
