import React from 'react'
import { Outlet } from "react-router-dom";
export default function Signup() {
  return (
    <>
    <section className=' className="bg-gray-100 flex items-center justify-center mt-2'>
    <div className='bg-slate-50 p-8 w-96 shadow-md mt-2 justify-center'>
    <img className="flex-auto " src="/src/assets/components/images/Logo.png" alt="Logo" />
      <h2 className="text-2xl font-semibold mb-4">Sign Up</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="name" className="block text-dark-600">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full p-2 border border-dark-300 rounded-md"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="block text-dark-600">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full p-2 border border-dark-300 rounded-md"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="block text-dark-600">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            className="w-full p-2 border border-dark-300 rounded-md"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="confirmPassword" className="block text-dark-600">Password:</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            className="w-full p-2 border border-dark-300 rounded-md"
            required
          />
        </div>
        <button type="submit" className=" bg-sky-600 shadow-lg py-2 px-4 rounded-md hover:bg-red-700">Sign Up</button>
      </form>
    </div>
    </section>
    <Outlet/>
   </>
  )
}
