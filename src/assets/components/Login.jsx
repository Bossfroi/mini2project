import React, { useState } from 'react';
import GoogleAuth from './API/GoogleAuth';
import { useNavigate } from 'react-router-dom';
import { useBearStore } from './Navigation';

export default function Login() {
  const navigate = useNavigate();
  const setIsAuthenticated = useBearStore((state) => state.setIsAuthenticated);

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.status === 200) {
        const data = await response.json(); 
        console.log('Login successful:', data.message);
        setIsAuthenticated(true);      // true if login so the navigation will update
        navigate('/Dashboard');       // navigate dashboard
      localStorage.setItem('user', JSON.stringify(response));       // Store user data in localStorage
      console.log(data)

      } else {
        const errorData = await response.json();
        console.error('Login failed:', errorData.error);
        alert('Wrong Email and password');
      }
    } catch (error) {
      console.error('An error occurred', error);
      alert('DB server error');
    }
  };
  return (
    <section className="bg-gray-100 flex items-center justify-center mt-2">
      <div className="bg-slate-50 p-8 w-96 shadow-md mt-2 justify-center">
        <img className="flex-auto" src="/src/assets/components/images/Logo.png" alt="Logo" />
        <h2 className="text-2xl font-semibold mb-4">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="block text-dark-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              autoComplete="on"
              className="w-full p-2 border border-dark-300 rounded-md"
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-dark-600">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              required
              autoComplete="on"
              className="w-full p-2 border border-dark-300 rounded-md"
              value={formData.password}
              onChange={handleInputChange}
            />
          </div>
          <button type="submit" className="bg-sky-600 shadow-lg py-2 px-4 rounded-md hover-bg-red-700">
            Login
          </button>

          {/* Add your Facebook and Google login components here */}
          <div className="mt-2 ml-14">
            <img
              className="facebook cursor-pointer shadow-sm"
              src="https://scontent.fmnl16-1.fna.fbcdn.net/v/t39.2365-6/294967112_614766366879300_4791806768823542705_n.png?_nc_cat=105&amp;ccb=1-7&amp;_nc_sid=e280be&amp;_nc_eui2=AeHEMck23tE0et5GlZGvfeYkNe_rkd5ELpg17-uR3kQumM4d2aF4abWjSYt5iQ47Y-usznBMDIwD1Jfa1N27QX-k&amp;_nc_ohc=k3PXaTp2e9AAX-684Xg&amp;_nc_ht=scontent.fmnl16-1.fna&amp;oh=00_AfA-86JKfEtq8hTizV5dNRuotagDEm7u5LGWE9_jD_lOig&amp;oe=65425BE4"
              alt="Facebook"
              id="facebook"
            />
          </div>
          <div className="mt-2 ml-14">
            <GoogleAuth />
            <br />
            <a href="/Signup" className="bg-sky-600 shadow-lg mt-12 ml-6 py-1 px-2 rounded-md hover-bg-red-700">
              Sign-up Manually
            </a>
          </div>
        </form>
      </div>
    </section>
  );
}
