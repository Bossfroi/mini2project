import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../Home';
import Categories from '../logged/Categories';
import CategoryDetails from '../logged/CategoryDetails';
import ContactUs from '../ContactUs';
import About from '../About';
import News from '../News';
import Login from '../Login';
import Signup from '../Signup';
import Navigation from '../Navigation';
import Index from '../logged/HomeLoged';
import Notfound from '../Notfound';
import Footer from '../Footer';
import Rent from '../logged/Rent'
import Cart from '../logged/Cart'
import Logout from '../logged/logout';
import RentCalculator from '../RentCalculator';
import ShippingCalculator from '../ShippingCalculator';
import Categoriesbyitem from '../logged/categoriesbyitem';




export default function AppRoute({ children }) {
  return (
    <BrowserRouter>
    
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/Categories" element={<Categories/>}/>
        <Route path="/ContactUs" element={<ContactUs/>}/>
        <Route path="/about" element={<About/>} />
        <Route path="/news" element={<News/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/Dashboard" element={<Index/>} />
        <Route path="/Cart" element={<Cart/>}/>
        <Route path="/Rent" element={<Rent />}/>
        <Route path="/logout" element={<Logout/>} />
        <Route path="*" element={<Notfound/>}/>
        <Route path="/" element={<Footer />}/>
        <Route path="/RentCalculator" element={<RentCalculator/>}/>
        <Route path="/ShippingCalculator" element={<ShippingCalculator/>}/>
        <Route path="/categoriesbyitem" element={<Categoriesbyitem />} />
        <Route path="/" exact component={CategoryDetails}/>
        <Route path="/category/:categoryId" component={CategoryDetails} />
        {children}
      </Routes>
      

      
      

    </BrowserRouter>
  );
}
