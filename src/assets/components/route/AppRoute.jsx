import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../Home';
import About from '../About';
import News from '../News';
import Login from '../Login';
import Signup from '../Signup';
import Navigation from '../Navigation';

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
      </Routes>
    </BrowserRouter>
  );
}