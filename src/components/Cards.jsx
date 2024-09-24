import React from 'react'
import Card from './Card'

function Cards() {
  return (
    <div className='w-full'>
       <div className='max-w-screen-xl mx-auto flex gap-2  py-32'>
          <Card wirth={"basis-1/3"} start={false} para={true} />
          <Card wirth={"basis-2/3"}start={true} para={false} hover='true'   />
       </div>
    </div>
  )
}

export default Cards
