import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../Home';
import About from '../About';
import News from '../News';
import Login from '../Login';
import Signup from '../Signup';
import Navigation from '../Navigation';
import GoogleAuth from '../API/GoogleAuth';

export default function AppRoute() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/news" element={<News />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/google" element={<GoogleAuth />} />
      </Routes>
    </BrowserRouter>
  );
}
