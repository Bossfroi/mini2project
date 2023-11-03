import React from 'react'

export default function Cart({ cart }) {
  return (
    <div className="bg-white p-6 shadow-md w-full sm:w-1/2 m-8">
      <h2 className="text-3xl font-semibold text-gray-800 mb-4">Cart</h2>
      {cart.map((item) => (
        <div key={item.id} className="mb-4">
          <p>{item.title}</p>
          <p>Rental Amount: ${item.rentalAmount}</p>
          <p>Start Date: {item.startDate}</p>
          <p>End Date: {item.endDate}</p>
          
        </div>
      ))}
    </div>
  );
}










