import React from 'react';
import { useParams, Link } from 'react-router-dom';

const categoryList = [
  // Your category data here...
];

function CategoryDetails() {
  // Use useParams to get the "categoryName" parameter from the URL
  const { categoryName } = useParams();
  
  // Find the category object that matches the categoryName
  const category = categoryList.find(category => category.link === `/${categoryName}`);

  if (!category) {
    return <div>Category not found</div>;
  }

  return (
    <div className="bg-red-200 p-10">
      <div key={category.id} className="max-w-md rounded-lg overflow-hidden shadow-lg">
        <img src={category.picture} alt={category.title} className="w-full h-48 object-cover" />
        <div className="px-6 py-4">
          <div className="font-semibold text-xl text-gray-800 mb-2">{category.title}</div>
          <p className="text-gray-700 text-base">Rental Amount: ${category.rentalAmount}</p>
          <p className="text-gray-700 text-base">{category.discription}</p>
        </div>
      </div>
      <Link to="/" className="text-blue-500 hover:text-blue-600 hover:underline bg-blue-200 hover:bg-blue-400 text-white font-semibold px-4 py-2 rounded transition duration-300">
        Back to Categories
      </Link>
    </div>
  );
}

export default CategoryDetails;
