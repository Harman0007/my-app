import React from 'react'
import Image from 'next/image'
import Rest from '../public/Rest.jpeg'
const Hero = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2'>
       <div className="col-span-1 grid place-items-center h-[500px]">
         <h1 className="text-center text-5xl font-semi-bold font-mono text-slate-800">
            The Minimilist Mobile Order Management System For Restaurants 
         </h1>
        </div>  
        <div className="grid place-items-center">
            <Image src={Rest} alt="Restaurant" width={500} height={500} className="object-contain rounded-lg"/>
        </div>
    </div>
  )
}

export default Hero