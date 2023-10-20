import React from 'react';
import { Link, Route } from 'react-router-dom';

import { create } from 'zustand';
const useBearStore = create((set) => ({
  setIsAuthenticated: (value) => set({ isAuthenticated: value }),
}));
export { useBearStore };



export default function Navigation() {
  const isAuthenticated = useBearStore((state) => state.isAuthenticated);
 
  const NavMenu = [
    {
      Title: isAuthenticated ? 'Dashboard': 'Home',
      Link: isAuthenticated ? '/Dashboard': '/Home',
    },
    {
      Title:isAuthenticated ? 'Rent': 'Categories',
      Link: isAuthenticated ? '/Rent': '/Categories',
    },
    {
      Title: isAuthenticated ? 'Cart': 'Contactus',
      Link: isAuthenticated ? '/Cart': '/Contactus',
    },
    {
      Title: 'About',
      Link: '/About',
    },
    {
      Title: 'News',
      Link: '/News',
    },
    {
      Title: isAuthenticated ? 'Logout' : 'Login', 
      Link: isAuthenticated  ? '/logout' : '/login',    
    },
   
  ];

  return (
    <>
      <header className="bg-opacity-90 bg-stone-950 p-4 flex-auto">
        <nav className="container mx-auto">
          <div className="flex justify-between items-center">
            <Link to="/login" className="text-white text-2xl font-bold">
              <img src="/src/assets/components/images/Logo1.png" className="w-35 h-10" alt="Logo" />
            </Link>
            <div className="flex space-x-4">
              {NavMenu.map((item) => (
                <Link to={item.Link} key={item.Link} className="text-sky-200 hover:text-red-700">
                  {item.Title}
                </Link>
              ))}
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
