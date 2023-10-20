import React from 'react'
import Navigation from './Navigation'
import ProductLine from './ProductLine'
import Footer from './Footer';
import AirCompressorBigPic from './images/imageCat/AirCompressorBig.jpg'


export default function Categories() {
  return (
   <>
    <div className="text-center py-12 bg-red-200">
      <h1 className="text-3xl font-extrabold text-gray-900 leading-tight mb-4">Product Line</h1>
      <p className="text-gray-600 text-lg">Browse our selection of top quality construction and heavy equipment only from the world’s leading manufacturers.</p>
    </div>

      
      <div className='bg-red-100 flex p-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 grid-rows-1 sm:grid-rows-2 md:grid-rows-3 lg:grid-rows-4 xl:grid-rows-4 gap-20 '>
        <ProductLine
          title='Air Compressor'
          picture={AirCompressorBigPic}
        />
        <ProductLine
          title='Backhoe'
          picture={AirCompressorBigPic}
        />
        <ProductLine
          title='Backhoe Loader'
          picture={AirCompressorBigPic}
        />
        <ProductLine
          title='Boom Truck'
          picture={AirCompressorBigPic}
        />
        <ProductLine
          title='Crane'
          picture={AirCompressorBigPic}
        />
        <ProductLine
          title='Excavator'
          picture={AirCompressorBigPic}
        />
        <ProductLine
          title='Forklift'
          picture={AirCompressorBigPic}
        />
        <ProductLine
          title='Generator'
          picture={AirCompressorBigPic}
        />
        <ProductLine
          title='Grader'
          picture={AirCompressorBigPic}
        />
        <ProductLine
          title='Hydraulic Breaker'
          picture={AirCompressorBigPic}
        />
        <ProductLine
          title='Jack Hammer'
          picture={AirCompressorBigPic}
        />
        <ProductLine
          title='Light Tower'
          picture={AirCompressorBigPic}
        />
        <ProductLine
          title='Manlift'
          picture={AirCompressorBigPic}
        />
        <ProductLine
          title='Road Roller'
          picture={AirCompressorBigPic}
        />
        <ProductLine
          title='Scissor Lift'
          picture={AirCompressorBigPic}
        />
        <ProductLine
          title='Skid Steer Loader'
          picture={AirCompressorBigPic}
        />
        <ProductLine
          title='Telehandler'
          picture={AirCompressorBigPic}
        />
        <ProductLine
          title='Telescopic Clamshell'
          picture={AirCompressorBigPic}
        />
         <ProductLine
          title='Welding Machine'
          picture={AirCompressorBigPic}
        />
        <ProductLine
          title='Wheel Loader'
          picture={AirCompressorBigPic}
        />
      </div>
      <Footer/>
   
   </>
  )
}
