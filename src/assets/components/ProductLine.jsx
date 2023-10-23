import React from 'react';
import { Link } from 'react-router-dom';

import { Navigate } from 'react-router-dom';

const ProductLine = (props) => {
  return (
    <div className="max-w-lg mx-auto bg-red-400 rounded-lg shadow-lg transition-transform hover:scale-105">
      <Link to="/login">
        <img src={props.picture} alt="Image" className="w-full h-64 object-cover rounded-t-lg" />
        <div className="px-6 py-4">
          <div className="flex flex-col items-center">
            <div className="font-bold text-2xl text-gray-800 mb-2">{props.title}</div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductLine;
