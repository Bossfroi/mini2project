import React from 'react';
import { Link } from 'react-router-dom';

const ItemDescription = (props) => {
  const { categoryList } = props; 

  return (
     <div>
      <div className="text-center py-12 bg-red-200">
      <h1 className="text-3xl font-extrabold text-gray-900 leading-tight mb-4">Product Item</h1>
      <p className="text-gray-600 text-lg">Browse our selection of top quality construction and heavy equipment only from the world’s leading manufacturers.</p>
    </div>
     </div>
  );
};

export default ItemDescription;
