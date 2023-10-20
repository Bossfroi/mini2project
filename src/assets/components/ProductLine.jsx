import React from 'react'
import AirCompressorBigPic from './images/imageCat/AirCompressorBig.jpg'

const ProductLine = (props) => {
    return (
        <div className="max-w-md mx-auto bg-red-400 rounded-lg shadow-lg overflow-hidden overflow-hidden shadow-lg transition-transform transform hover:scale-105">
            <a href="">
            <img src={AirCompressorBigPic} alt="Image" className="w-full h-48 object-cover"/>
            <div className="px-6 py-4">
                <div className="font-bold text-xl text-gray-800 mb-2">{props.title}</div>
            </div>
            </a>
            
        </div>
    )
}

export default ProductLine