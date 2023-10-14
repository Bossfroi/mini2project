import React from 'react'
import Navigation from './Navigation'
import { Outlet } from "react-router-dom";
export default function Home() {
  return (
    <>
     <>
     <div className='relative'>
      <img 
      src="/src/assets/components/images/hero.jpg" 
      alt="" 
      className='w-full'/>
      <div className='absolute inset-0 items-center justify-center '>
      <p className='p-4 md:p-8 lg:p-12 text-3xl md:text-4xl lg:text-5xl font-extrabold text-center leading-snug'>
        Building Dreams with Quality Rentals.
      </p>
      <p className='p-4 md:p-8 lg:p-12 text-3xl md:text-4xl lg:text-5xl font-extrabold text-center leading-snug'>
      From the foundation of your dreams to the towering 
heights of your ambitions, our extensive selection of 
top-quality construction equipment rentals is here to 
provide you with the tools, support, and reliability you need. 
We're more than just equipment 
      </p>
      </div>
     </div>
     </>
    <Outlet/>
    </>
  )
}
