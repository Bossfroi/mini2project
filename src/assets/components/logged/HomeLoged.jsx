import React, { useEffect, useState } from 'react';

export default function HomeLogged() {
  const [user, setUser] = useState(null);

  // When the component mounts, retrieve user data from localStorage
  useEffect(() => {
    const userData = localStorage.getItem('userData');
    if (userData) {
      const parsedUser = JSON.parse(userData);
      setUser(parsedUser);
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {user && (
        <div className="p-4 md:p-8 flex justify-center items-center">
          <div className="bg-white p-8 rounded-lg shadow-lg text-center animate__animated animate__fadeIn">
            <h1 className="text-3xl font-bold text-blue-600 mb-4">
              Welcome, {user.name}
            </h1>
            <p className="text-lg text-gray-600">Sign in as {user.email}</p>
            <img
              src={user.picture}
              alt="User Picture"
              className="w-32 h-32 rounded-full mx-auto mt-4"
            />
          </div>
        </div>
      )}
      <div className="bg-gray-100 py-8">
        <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg text-center animate__animated animate__fadeIn">
          <form action="" className="space-y-4">
            <label htmlFor="company" className="block text-gray-700">
              Your Company
            </label>
            <input
              type="text"
              id="company"
              className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
            />

            <label htmlFor="address" className="block text-gray-700">
              Your Address
            </label>
            <input
              type="text"
              id="address"
              className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
            />

            <label htmlFor="businessType" className="block text-gray-700">
              Your Type of Business
            </label>
            <input
              type="text"
              id="businessType"
              className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
            />

            <label htmlFor="companyNumber" className="block text-gray-700">
              Your Company Number
            </label>
            <input
              type="text"
              id="companyNumber"
              className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
            />
          </form>
        </div>
      </div>
    </div>
  );
}
