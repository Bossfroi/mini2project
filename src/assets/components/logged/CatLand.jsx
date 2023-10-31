import React from 'react';
import { Link } from 'react-router-dom';

const CatLand = (props) => {
  return (
    <>
    <div>CatLand</div>
    <div className="font-bold text-2xl text-gray-800 mb-2">{props.title}</div>
    </>
    
  )
}

export default CatLand;