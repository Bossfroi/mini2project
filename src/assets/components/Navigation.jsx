import React from 'react';
export default function Navigation() {
  const NavMenu = [
    {
      Title: 'Home',
      link: '/Home',
    },
    {
      Title: 'Categories',
      link: '/Categories',
    },
    {
      Title: 'contactUs',
      link: '/ContactUs',
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
  
  ];

  return (
    <>
      <header className=" bg-opacity-90 bg-stone-950 p-4 flex-auto">
        <nav className="container mx-auto">
          <div className="flex justify-between items-center">
            <a href="/login" className="text-white text-2xl font-bold ">
            <img src='/src/assets/components/images/Logo1.png' className=' w-35 h-10'></img>
            </a>
            <div className="flex space-x-4">
              {NavMenu.map((item) => (
                <a
                  key={item.link}
                  className=" text-sky-200 hover:text-red-700"
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