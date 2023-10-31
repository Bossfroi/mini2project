import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Show from '../images/mediaLogo/show.png';
import Hide from '../images/mediaLogo/hide.png';
import { stringify } from 'postcss';

const HomeLogged = () => {
  const [user, setUser] = useState(null);
  const [formData, setFormData] = useState({
    companyname: '',
    companyaddress: '',
    businesstype: '',
    companynumber: '',
  });

  const [isContentVisible, setContentVisibility] = useState(true);

  useEffect(() => {
    const userData = localStorage.getItem('userData');
    if (userData) {
      const parsedUser = JSON.parse(userData);
      setUser(parsedUser);
    }
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/data/addOrUpdateUserdata', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      // Check for a successful response
      if (response.status === 200) {
        window.alert('Successfully Saved');
        localStorage.setItem('userData1', JSON.stringify(response.config.data));
        console.log(formData)
      } else {
        window.alert('Failed to save data. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      window.alert('An error occurred while saving your data.');
    }
  };

  return (
    <div className="w-full md:w-3/3 p-4 md:p-1 justify-center text-center flex">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center animate__animated animate__fadeIn">
        {user && (
          <>
            <h1 className="text-3xl font-bold text-blue-700 mb-2">
              Welcome, {user.name}
            </h1>
            <p className="text-sm text-gray-700">Sign in as {user.email}</p>
            <img src={user.picture} alt="" className="h-8 w-8 mx-auto" />
          </>
        )}
        <h1>Please set up your details</h1>
        <div onClick={() => setContentVisibility(!isContentVisible)}>
          {isContentVisible ? (
            <img src={Hide} alt="" className="h-7 w-7 cursor-pointer" />
          ) : (
            <img src={Show} alt="" className="h-7 w-7 cursor-pointer" />
          )}
        </div>
        {isContentVisible && (
          <form className="space-y-4" onSubmit={handleSubmit}>
            <InputField
              label="Your Company"
              name="companyname"
              value={formData.companyname}
              onChange={handleChange}
            />

            <InputField
              label="Your Address"
              name="companyaddress"
              value={formData.companyaddress}
              onChange={handleChange}
            />

            <InputField
              label="Your Type of Business"
              name="businesstype"
              value={formData.businesstype}
              onChange={handleChange}
            />

            <InputField
              label="Your Company Number"
              name="companynumber"
              value={formData.companynumber}
              onChange={handleChange}
            />

            <div className="text-center">
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              >
                Save
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

const InputField = ({ label, name, value, onChange }) => (
  <div>
    <label htmlFor={name} className="block text-gray-700">
      {label}
    </label>
    <input
      type="text"
      value={value}
      onChange={onChange}
      id={name}
      name={name}
      className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
    />
  </div>
);

export default HomeLogged;
