import React from 'react'
import Navigation from './Navigation'
import { Outlet } from "react-router-dom";
import Footer from './Footer';
export default function Home() {
  return (
    <>
     <>
     

<body className='bg-red-200'>
<div className="relative">
  <img
    src="/src/assets/components/images/hero.jpg"
    alt=""
    className="w-full filter blur-sm"
  />
  <div className="absolute inset-0 flex">
    <div className='bg-red-300 m-5 sm:m-10 max-w-md bg-gradient-to-r from-red-500 to-red-300 p-5 rounded-lg shadow-lg'>
      <ul className='list-disc p-6'>
        <h2 className='font-extrabold pb-5 text-2xl sm:text-4xl'>Product Line</h2>
        <a href="" className='hover:underline'><li>Air Compressor</li></a>
        <a href="" className='hover:underline'><li>Backhoe</li></a>
        <a href="" className='hover:underline'><li>Backhoe Loader</li></a>
        <a href="" className='hover:underline'><li>Boom Truck</li></a>
        <a href="" className='hover:underline'><li>Crane</li></a>
        <a href="" className='hover:underline'><li>Excavator</li></a>
        <a href="" className='hover:underline'><li>Forklift</li></a>
        <a href="" className='hover:underline'><li>Generator</li></a>
        <a href="" className='hover:underline'><li>Grader</li></a>
        <a href="" className='hover:underline'><li>Hydraulic Breaker</li></a>
        <a href="" className='hover:underline'><li>Jack Hammer</li></a>
        <a href="" className='hover:underline'><li>Light Tower</li></a>
        <a href="" className='hover:underline'><li>Manlift</li></a>
        <a href="" className='hover:underline'><li>Road Roller</li></a>
        <a href="" className='hover:underline'><li>Scissor Lift</li></a>
        <a href="" className='hover:underline'><li>Skid Steer Loader</li></a>
        <a href="" className='hover:underline'><li>Telehandler</li></a>
        <a href="" className='hover:underline'><li>Telescopic Clamshell</li></a>
        <a href="" className='hover:underline'><li>Welding Machine</li></a>
        <a href="" className='hover:underline'><li>Wheel Loader</li></a>
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


<div className='flex pt-8'>
  <div className='m-2 w-1/2'>
    <div className='relative h-72'>
      <img src="/src/assets/components/images/rent-calculatorButton.jpg" alt="" className='w-full h-full object-cover rounded-2xl' />
      <div className="absolute inset-x-0 bottom-0 flex items-center justify-center">
        <button className='w-48 h-12 text-white font-semibold bg-gradient-to-r from-red-500 to-green-500 rounded-full hover:from-green-500 hover:to-red-500 shadow-lg transition-transform transform hover:scale-105'>
          Rent Calculator
        </button>
      </div>
    </div>
  </div>
  <div className='m-2 w-1/2'>
    <div className='relative h-72'>
      <img src="/src/assets/components/images/book-nowButton.jpg" alt="" className='w-full h-full object-cover rounded-2xl' />
      <div className="absolute inset-x-0 bottom-0 flex items-center justify-center">
        <button className='w-48 h-12 text-white font-semibold bg-gradient-to-r from-red-500 to-green-500 rounded-full hover:from-green-500 hover:to-red-500 shadow-lg transition-transform transform hover:scale-105'>
          Book Now
        </button>
      </div>
    </div>
  </div>
</div>

<div className='flex justify-between'>
  <div className="m-2 w-1/3">
    <div className="bg-white p-6 h-auto rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b-2 border-gray-800">Easy Online Rentals</h2>
      <p className="text-base text-gray-600 leading-relaxed">
        Rent without the hassle of a phone call. Place, view, and manage your orders anytime, through any device using our online portal.
      </p>
    </div>
  </div>
  <div className="m-2 w-1/3">
    <div className="bg-white p-6 h-auto rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b-2 border-gray-800">Supplier Nationwide</h2>
      <p className="text-base text-gray-600 leading-relaxed">
      As a construction rental company, we offer nationwide access to top-quality equipment and machinery, ensuring reliable support for your projects across the country.
      </p>
    </div>
  </div>
  <div className="m-2 w-1/3">
    <div className="bg-white p-6 h-auto rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b-2 border-gray-800">We Handle Everything</h2>
      <p className="text-base text-gray-600 leading-relaxed">
      We handle everything – from equipment delivery and setup to maintenance, so you can focus on your construction project with peace of mind.
      </p>
    </div>
  </div>
</div>
<div class="flex items-center p-8">
  <div class="w-1/2 pr-4">
    <p class="text-gray-800 text-lg leading-7">Welcome to [Equipment Rentals], your one-stop destination for everything related to construction materials. In this insightful video, we delve deep into the world of construction, uncovering the building blocks of your dream projects.</p>
    <br /><br />
    <p class="text-gray-800 text-lg leading-7">At [Equipment Rentals], we are passionate about construction and dedicated to sharing our expertise with you. Explore our video library and embark on a journey of discovery, where every video offers a wealth of information, inspiration, and solutions.</p>
  </div>
  <div class="w-1/2">
    <div class="relative">
      <iframe class="w-full h-80" src="/src/assets/components/images/homePageVideo.mp4" frameborder="0" allowfullscreen></iframe>
    </div>
  </div>
</div>



    



</body>
<Footer/>
     </>
    <Outlet/>
    </>
  )
}
