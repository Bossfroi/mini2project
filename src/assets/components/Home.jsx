import React from 'react'
import Navigation from './Navigation'
import { Outlet } from "react-router-dom";
export default function Home() {
  return (
    <>
     <>
     <div className="relative">
  <img
    src="/src/assets/components/images/hero.jpg"
    alt=""
    className="w-full filter blur-md"
  />
  <div className="absolute inset-0 flex">
    <div className='bg-red-300 m-5 sm:m-10 max-w-md bg-gradient-to-r from-red-500 to-red-300 p-5 rounded-lg shadow-lg'>
      <ul>
        <h2 className='font-extrabold pb-5 text-2xl sm:text-4xl'>Product Line</h2>
        <li>Air Compressor</li>
        <li>Backhoe</li>
        <li>Backhoe Loader</li>
        <li>Boom Truck</li>
        <li>Crane</li>
        <li>Excavator</li>
        <li>Forklift</li>
        <li>Generator</li>
        <li>Grader</li>
        <li>Hydraulic Breaker</li>
        <li>Jack Hammer</li>
        <li>Light Tower</li>
        <li>Manlift</li>
        <li>Road Roller</li>
        <li>Scissor Lift</li>
        <li>Skid Steer Loader</li>
        <li>Telehandler</li>
        <li>Telescopic Clamshell</li>
        <li>Welding Machine</li>
        <li>Wheel Loader</li>
      </ul>
    </div>
    
    <div className="w-full sm:w-1/2 m-5 sm:m-10 space-y-5 sm:space-y-20">
      <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-black leading-tight mb-4">
        Building Dreams with Quality Rentals.
      </h1>
      <p className="text-base sm:text-xl md:text-2xl lg:text-3xl font-semibold text-black leading-relaxed mb-6">
        From the foundation of your dreams to the towering heights of your ambitions, our extensive selection of top-quality construction equipment rentals is here to provide you with the tools, support, and reliability you need. We're more than just equipment.
      </p>
      <div className="flex space-x-4">
       
        <a href="./Signup" className=" px-4 sm:px-6 py-2 sm:py-3 text-white bg-gradient-to-r from-red-500 to-red-600 rounded-full hover:from-red-600 hover:to-red-700 hover:shadow-lg transition duration-300">
          Sign-up For Free
          </a>
        <button className="px-4 sm:px-6 py-2 sm:py-3 text-red-500 border border-red-500 rounded-full hover:bg-red-100 hover:text-red-600 hover:border-red-600 hover:shadow-lg transition duration-300">
          Questions? We Can Help
        </button>
      </div>
    </div>
  </div>
</div>

     </>
    <Outlet/>
    </>
  )
}
