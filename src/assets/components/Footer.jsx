import React from 'react'
import Navigation from './Navigation'
import { Outlet } from "react-router-dom";

function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-6">
        <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="text-center md:text-left">
                    <h2 className="text-2xl font-bold">Company Name</h2>
                    <p className="mt-2">123 Main Street, City</p>
                    <p>contact@company.com</p>
                </div>
                <div>
                    <h3 className="text-lg font-semibold">Links</h3>
                    <ul className="mt-2">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Contact Us</a></li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-lg font-semibold">Social Media</h3>
                    <ul className="mt-2">
                        <li><a href="#">Facebook</a></li>
                        <li><a href="#">Twitter</a></li>
                        <li><a href="#">LinkedIn</a></li>
                        <li><a href="#">Instagram</a></li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-lg font-semibold">Newsletter</h3>
                    <p className="mt-2">Subscribe to our newsletter for updates.</p>
                    <form className="mt-2">
                        <input type="email" className="w-full p-2 rounded bg-gray-800 text-white" placeholder="Your Email"/>
                        <button className="w-full mt-2 bg-blue-500 hover:bg-blue-600 text-white py-2 rounded" type="submit">Subscribe</button>
                    </form>
                </div>
            </div>
        </div>
    </footer>
    );
  }
  
  export default Footer;

