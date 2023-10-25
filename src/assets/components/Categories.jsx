import React from 'react'
import { Link } from 'react-router-dom';
import Navigation from './Navigation'
import ProductLine from './ProductLine'
import backgroundImage from './images/category-page-wall.jpg';
import Footer from './Footer';



export default function Categories() {
  const categoryList = [
    {
      id: 1,
      title: "Air Compressor",
      picture: "https://guzent.com/wp-content/uploads/2023/02/Guzent-Air-Compressor-Product-Image.jpg.webp",
      link: "/AirCompressor",
      discription: "des 1"
    },
    {
      id: 2,
      title: "Backhoe",
      picture: "https://guzent.com/wp-content/uploads/2023/02/Guzent-Backhoe-Product-Image.jpg.webp",
      link: "/Backhoe",
      discription: "des 1"
    },
    {
      id: 3,
      title: "Backhoe Loader",
      picture: "https://guzent.com/wp-content/uploads/2023/02/Guzent-Backhoe-Loader-Product-Image.jpg.webp",
      link: "/BackhoeLoader",
      discription: "des 1"
    },
    {
      id: 4,
      title: "Boom Truck",
      picture: "https://guzent.com/wp-content/uploads/2023/03/Guzent-Boom-Truck-Product-Image-V2.jpg.webp",
      link: "/BoomTruck",
      discription: "des 1"
    },
    {
      id: 5,
      title: "Crane",
      picture: "https://guzent.com/wp-content/uploads/2023/02/Guzent-Crane-Product-Image.jpg.webp",
      link: "/Crane",
      discription: "des 1"
    },
    {
      id: 6,
      title: "Excavator",
      picture: "https://guzent.com/wp-content/uploads/2023/02/Guzent-Excavator-Product-Image.jpg.webp",
      link: "/Excavator",
      discription: "des 1"
    },
    {
      id: 7,
      title: "Forklift",
      picture: "https://guzent.com/wp-content/uploads/2023/02/Guzent-Forklift-Product-Image.jpg.webp",
      link: "/Forklift",
      discription: "des 1"
    },
    {
      id: 8,
      title: "Generator",
      picture: "https://guzent.com/wp-content/uploads/2023/02/Guzent-Generator-Product-Image.jpg.webp",
      link: "/Generator",
      discription: "des 1"
    },
    {
      id: 9,
      title: "Grader",
      picture: "https://guzent.com/wp-content/uploads/2023/02/Guzent-Grader-Product-Image.jpg.webp",
      link: "/Grader",
      discription: "des 1"
    },
    {
      id: 10,
      title: "Hydraulic Breaker",
      picture: "https://guzent.com/wp-content/uploads/2023/02/Guzent-Hydraulic-Breaker-Product-Image.jpg.webp",
      link: "/HydraulicBreaker",
      discription: "des 1"
    },
    {
      id: 11,
      title: "Light Tower",
      picture: "https://guzent.com/wp-content/uploads/2023/02/Guzent-Light-Tower-Product-Image.jpg.webp",
      link: "/LightTower",
      discription: "des 1"
    },
    {
      id: 12,
      title: "Manlift",
      picture: "https://guzent.com/wp-content/uploads/2023/02/Guzent-Manlift-Product-Image.jpg.webp",
      link: "/Manlift",
      discription: "des 1"
    },
    {
      id: 13,
      title: "Road Roller",
      picture: "https://guzent.com/wp-content/uploads/2023/02/Guzent-Road-Roller-Product-Image.jpg.webp",
      link: "/RoadRoller",
      discription: "des 1"
    },
    {
      id: 14,
      title: "Scissor Lift",
      picture: "https://guzent.com/wp-content/uploads/2023/02/Guzent-Scissor-Lift-Product-Image.jpg.webp",
      link: "/ScissorLift",
      discription: "des 1"
    },
    {
      id: 15,
      title: "Skid Steer Loader",
      picture: "https://guzent.com/wp-content/uploads/2023/02/Guzent-Skid-Steer-Loader-Product-Image.jpg.webp",
      link: "/SkidSteerLoader",
      discription: "des 1"
    },
    {id: 16,
      title: "Telehandler",
      picture: "https://guzent.com/wp-content/uploads/2023/02/Guzent-Telehandler-Product-Image.jpg.webp",
      link: "/TeleHandler",
      discription: "des 1"
    },
    {
      id: 17,
      title: "Telescopic ClamShell",
      picture: "https://guzent.com/wp-content/uploads/2023/02/Guzent-Telescopic-Clamshell-Product-Image.jpg.webp",
      link: "/TelescopicClamshell",
      discription: "des 1"
    },
    {
      id: 18,
      title: "Wheel Loader",
      picture: "https://guzent.com/wp-content/uploads/2023/02/Guzent-Wheel-Loader-Product-Image.jpg.webp",
      link: "/WheelLoader",
      discription: "des 1"
    },
    {
      id: 19,
      title: "Auger Drill",
      picture: "https://guzent.com/wp-content/uploads/2023/10/Guzent-Auger-Product-Image.jpg",
      link: "/AugerDrill",
      discription: "des 1"
    },
    {
      id: 20,
      title: "Trencher",
      picture: "https://guzent.com/wp-content/uploads/2023/10/Guzent-Trencher-Product-Image.jpg",
      link: "/Trencher",
      discription: "des 1"
    },

  ]
  
  
  
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
        <div className="flex p-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 grid-rows-1 sm:grid-rows-2 md:grid-rows-3 lg:grid-rows-4 xl:grid-rows-4 gap-20">
          {categoryList.map((cat) => (
            <Link to={cat.link} key={cat.id}>
              <ProductLine
              title={cat.title} 
              picture={cat.picture}/>
            </Link>
          ))}
        </div>
      </body>
      <Footer/>
   
   </>
  )
}
