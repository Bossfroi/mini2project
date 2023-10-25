import React from 'react';
import { Link } from 'react-router-dom';
import AirCompressorBigPic from './images/imageCat/AirCompressorBig.jpg';
import { Navigate } from 'react-router-dom';

const ProductLine = (props) => {
  return (
    <div className="max-w-md mx-auto bg-red-400 rounded-lg shadow-lg transition-transform hover:scale-105">
      <Link to="/login">
        <img src={AirCompressorBigPic} alt="Image" className="w-full h-48 object-cover" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl text-gray-800 mb-2">{props.title}</div>
          
        </div>
      </Link>
    </div>
  );
};

export default ProductLine;
