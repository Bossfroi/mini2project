import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MemoizedHomeLogged = React.memo(function HomeLogged() {
  const [user, setUser] = useState(null);
  const [formData, setFormData] = useState({
    companyname: '',
    companyaddress: '', // Fixed typo here
    businesstype: '',
    companynumber: '',
  });

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

      // Check for a successful registration
      if (response.status === 200) {
        window.alert('successfully Save');
        localStorage.setItem('userData', JSON.stringify(response));
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };


  return (
    <div className="bg-gray-100 flex flex-col md:flex-row py-5">
      {user && (
        <div className="w-full md:w-1/3 p-4">
          <div className="bg-white p-4 rounded-lg shadow-lg text-center animate__animated animate__fadeIn">
            <h1 className="text-3xl font-bold text-blue-600 mb-2">
              Welcome, {user.name}
            </h1>
            <p className="text-lg text-gray-600">Sign in as {user.email}</p>
            <img
              src={user.picture}
              alt="User Picture"
              className="w-32 h-32 rounded-full mx-auto mt-4"
            />
          </div>
        </div>
      )}

      <div className="w-full md:w-2/3 p-4 md:p-8 flex">
        <div className="bg-white p-8 rounded-lg shadow-lg text-center animate__animated animate__fadeIn">
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
        </div>
      </div>
    </div>
  );
});

const InputField = ({ label, name, value, onChange }) => (
  <>
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
  </>
);

export default MemoizedHomeLogged;
