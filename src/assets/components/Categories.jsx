import React from 'react'
import Navigation from './Navigation'
import ProductLine from './ProductLine'
import backgroundImage from './images/category-page-wall.jpg';
import Footer from './Footer';



export default function Categories() {
  
  const AirCompressorCat = 'https://guzent.com/wp-content/uploads/2023/02/Guzent-Air-Compressor-Product-Image.jpg.webp';
  const BackhoeCat = 'https://guzent.com/wp-content/uploads/2023/02/Guzent-Backhoe-Product-Image.jpg.webp';
  const BackhoeLoaderCat = 'https://guzent.com/wp-content/uploads/2023/02/Guzent-Backhoe-Loader-Product-Image.jpg.webp';
  const boomTruckCat = 'https://guzent.com/wp-content/uploads/2023/03/Guzent-Boom-Truck-Product-Image-V2.jpg.webp';
  const CraneCat = 'https://guzent.com/wp-content/uploads/2023/02/Guzent-Crane-Product-Image.jpg.webp';
  const ExcavatorCat = 'https://guzent.com/wp-content/uploads/2023/02/Guzent-Excavator-Product-Image.jpg.webp';
  const ForkliftCat = 'https://guzent.com/wp-content/uploads/2023/02/Guzent-Forklift-Product-Image.jpg.webp';
  const GeneratorCat = 'https://guzent.com/wp-content/uploads/2023/02/Guzent-Generator-Product-Image.jpg.webp';
  const GraderCat = 'https://guzent.com/wp-content/uploads/2023/02/Guzent-Grader-Product-Image.jpg.webp';
  const HydraulicBreakerCat = 'https://guzent.com/wp-content/uploads/2023/02/Guzent-Hydraulic-Breaker-Product-Image.jpg.webp';
  const LightToweCat = 'https://guzent.com/wp-content/uploads/2023/02/Guzent-Light-Tower-Product-Image.jpg.webp';
  const ManliftCat = 'https://guzent.com/wp-content/uploads/2023/02/Guzent-Manlift-Product-Image.jpg.webp';
  const RoadRollerCat = 'https://guzent.com/wp-content/uploads/2023/02/Guzent-Road-Roller-Product-Image.jpg.webp';
  const ScissorLiftCat = 'https://guzent.com/wp-content/uploads/2023/02/Guzent-Scissor-Lift-Product-Image.jpg.webp';
  const SkidSteerLoaderCat = 'https://guzent.com/wp-content/uploads/2023/02/Guzent-Skid-Steer-Loader-Product-Image.jpg.webp';
  const TelehandlerCat = 'https://guzent.com/wp-content/uploads/2023/02/Guzent-Telehandler-Product-Image.jpg.webp';
  const TelescopicClamshellCat = 'https://guzent.com/wp-content/uploads/2023/02/Guzent-Telescopic-Clamshell-Product-Image.jpg.webp';
  const WheelLoaderCat = 'https://guzent.com/wp-content/uploads/2023/02/Guzent-Wheel-Loader-Product-Image.jpg.webp';
  const AugerDrillCat = 'https://guzent.com/wp-content/uploads/2023/10/Guzent-Auger-Product-Image.jpg';
  const TrencherCat = 'https://guzent.com/wp-content/uploads/2023/10/Guzent-Trencher-Product-Image.jpg';
  
  const bodyStyles = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover', 
    
  };
  return (
   <>
    <div className="text-center py-12 bg-red-200">
      <h1 className="text-3xl font-extrabold text-gray-900 leading-tight mb-4">Product Line</h1>
      <p className="text-gray-600 text-lg">Browse our selection of top quality construction and heavy equipment only from the world’s leading manufacturers.</p>
    </div>

      
    <body style={bodyStyles}>
      <div className='flex p-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 grid-rows-1 sm:grid-rows-2 md:grid-rows-3 lg:grid-rows-4 xl:grid-rows-4 gap-20 '>
        <ProductLine
          title='Air Compressor'
          picture={AirCompressorCat}
        />
        <ProductLine
          title='Backhoe'
          picture={BackhoeCat}
        />
        <ProductLine
          title='Backhoe Loader'
          picture={BackhoeLoaderCat}
        />
        <ProductLine
          title='Boom Truck'
          picture={boomTruckCat}
        />
        <ProductLine
          title='Crane'
          picture={CraneCat}
        />
        <ProductLine
          title='Excavator'
          picture={ExcavatorCat}
        />
        <ProductLine
          title='Forklift'
          picture={ForkliftCat}
        />
        <ProductLine
          title='Generator'
          picture={GeneratorCat}
        />
        <ProductLine
          title='Grader'
          picture={GraderCat}
        />
        <ProductLine
          title='Hydraulic Breaker'
          picture={HydraulicBreakerCat}
        />
        <ProductLine
          title='Light Tower'
          picture={LightToweCat}
        />
        <ProductLine
          title='Manlift'
          picture={ManliftCat}
        />
        <ProductLine
          title='Road Roller'
          picture={RoadRollerCat}
        />
        <ProductLine
          title='Scissor Lift'
          picture={ScissorLiftCat}
        />
        <ProductLine
          title='Skid Steer Loader'
          picture={SkidSteerLoaderCat}
        />
        <ProductLine
          title='Telehandler'
          picture={TelehandlerCat}
        />
        <ProductLine
          title='Telescopic Clamshell'
          picture={TelescopicClamshellCat}
        />
        <ProductLine
          title='Wheel Loader'
          picture={WheelLoaderCat}
        />
        <ProductLine
          title='Auger Drill'
          picture={AugerDrillCat}
        />
        <ProductLine
          title='Trencher'
          picture={TrencherCat}
        />
      </div>
    </body>
      <Footer/>
   
   </>
  )
}
