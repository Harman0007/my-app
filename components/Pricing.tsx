import React from 'react'
import{Button } from "./ui/button";
const Pricing = () => {
  return (
    <div className='py-24'>
        <h2 className='text-center text-4xl font-mono py-4'>Pricing</h2>
        <div className='flex flex-col xl:flex-row justify-center gap-6'>
            <div className='grid place-content-center'>
                <div className='h-[400px] w-[400px] border-2 rounded-lg border-blue-600 p-4 bg-gradient-to-r from to-blue-400'>
                    <p className='text-3xl font-bold'>
                        Basic{" "}
                        <span className='text-slate-100 font-mono'>₹399 per Month</span>
                    </p>
                    <p className='mt-2 text-slate-700 font-mono'>
                        Our basic plan with our simplest features
                    </p>
                    <ul className='list-disc list-inside mt-2'>
                        <li className='text-slate-700 font-mono'>Mobile Ording</li>
                        <li className='text-slate-700 font-mono'>QR Code Scanning</li>
                        <li className='text-slate-700 font-mono'>
                            Customer Menu Templates
                        </li>
                        <li className='text-slate-700 font-mono'>
                            150 Customers per Month
                        </li>
                    </ul>
                    <Button className='mt-36 w-full'>Get Started</Button>
                </div>
    
            </div>

            <div className='grid place-content-center'>
                <div className='h-[400px] w-[400px] border-2 rounded-lg border-blue-600 p-4 bg-gradient-to-r from to-blue-400'>
                    <p className='text-3xl font-bold'>
                        Basic{" "}
                        <span className='text-slate-100 font-mono'>₹599 per Month</span>
                    </p>
                    <p className='mt-2 text-slate-700 font-mono'>
                        Our basic plan with our simplest features
                    </p>
                    <ul className='list-disc list-inside mt-2'>
                        <li className='text-slate-700 font-mono'>Mobile Ording</li>
                        <li className='text-slate-700 font-mono'>QR Code Scanning</li>
                        <li className='text-slate-700 font-mono'>
                            Customer Menu Templates
                        </li>
                        <li className='text-slate-700 font-mono'>
                            350 Customers per Month
                        </li>
                    </ul>
                    <Button className='mt-36 w-full'>Get Started</Button>
                </div>
    
            </div>

            <div className='grid place-content-center'>
                <div className='h-[400px] w-[400px] border-2 rounded-lg border-blue-600 p-4 bg-gradient-to-r from to-blue-400'>
                    <p className='text-3xl font-bold'>
                        Basic{" "}
                        <span className='text-slate-100 font-mono'>₹799 per Month</span>
                    </p>
                    <p className='mt-2 text-slate-700 font-mono'>
                        Our basic plan with our simplest features
                    </p>
                    <ul className='list-disc list-inside mt-2'>
                        <li className='text-slate-700 font-mono'>Mobile Ording</li>
                        <li className='text-slate-700 font-mono'>QR Code Scanning</li>
                        <li className='text-slate-700 font-mono'>
                            Customer Menu Templates
                        </li>
                        <li className='text-slate-700 font-mono'>
                            550 Customers per Month
                        </li>
                    </ul>
                    <Button className='mt-36 w-full'>Get Started</Button>
                </div>
    
            </div>
        </div>
    </div>
  )
}

export default Pricing