import React from 'react';

export default function Navigation() {
  const NavMenu = [
    {
      Title: 'Home',
      link: '/Home',
    },
    {
      Title: 'About',
      link: '/About',
    },
    {
      Title: 'News',
      link: '/News',
    },
    {
      Title: 'Login',
      link: '/Login',
    },
    {
      Title: 'Signup',
      link: '/Signup',
    },
  ];

  return (
    <>
      <header className="bg-slate-950 p-4">
        <nav className="container mx-auto">
          <div className="flex justify-between items-center">
            <a href="#" className="text-white text-2xl font-bold">
              Logo
            </a>
            <div className="flex space-x-4">
              {NavMenu.map((item) => (
                <a
                  key={item.link}
                  className="text-white hover:text-gray-300"
                  href={item.link}
                >
                  {item.Title}
                </a>
              ))}
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}