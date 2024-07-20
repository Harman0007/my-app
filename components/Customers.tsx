import React from 'react'
import Image from 'next/image'
import logo1 from '../public/logo1.png'
import logo2 from '../public/log02.png'
import logo3 from '../public/logo3.png'
import logo4 from '../public/logo4.png'
const Customers = () => {
  return (
    <div className='md:col-span-2 mt-12'>
        <h1 className='text-center text-slate-700 pt-10 text-4xl font-semi-bold font-mono'>
            Trusted By Thousands Of Restaurants
        </h1>
        <div className='w-full flex justify-center gap-2 lg:gap-12 mt-6'>
            <Image src={logo1} alt='logo1' width={150} height={150} className='object-contain rounded-lg'
            />

             <Image src={logo2} alt='logo2' width={150} height={150} className='object-contain rounded-lg'
            />

             <Image src={logo3} alt='logo3' width={150} height={150} className='object-contain rounded-lg'
            />

           <Image src={logo4} alt='logo4' width={150} height={150} className='object-contain rounded-lg'
            />
        </div>
    </div>
  )
}

export default Customers