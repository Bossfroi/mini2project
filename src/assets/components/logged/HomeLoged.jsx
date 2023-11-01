import React, { useState, useEffect } from 'react';
import axios from 'axios';
import InputField from '../logged/datafields/inputfields-userdatamongodb';
import Show from '../images/mediaLogo/show.png';
import Hide from '../images/mediaLogo/hide.png';
import Rentinfo from '../logged/datafields/Rentinfo';

const HomeLogged = () => {
  const [userData, setUserData] = useState(null);
  const [formData, setFormData] = useState({
    email: '',
    companyname: '',
    companyaddress: '',
    businesstype: '',
    companynumber: '',
    CreditCard:''
  });
  const [isContentVisible, setContentVisibility] = useState(true);
  const [data, setData] = useState([]);
  const [editIndex, setEditIndex] = useState();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userData = localStorage.getItem('userData');
        if (userData) {
          const parsedUser = JSON.parse(userData);
          setUserData(parsedUser);
          setFormData((prevData) => ({ ...prevData, email: parsedUser.email }));
        }
      } catch (error) {
        console.error('Error parsing user data from localStorage:', error);
      }
    };

    fetchUserData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/data/view');
        setData(response.data);
  
        // Store the fetched data in local storage with the key 'userData1'
        localStorage.setItem('userData1', JSON.stringify(response.data));
      } catch (error) {
        console.error('Error fetching data', error);
      }
    };
  
    fetchData();
  }, []);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        'http://localhost:5000/data/addOrUpdateUserdata',
        formData,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      if (response.status === 200) {
        window.alert('Successfully Saved');
        localStorage.setItem('userData1', JSON.stringify(formData));
        console.log(formData);
      } else {
        window.alert('Failed to save data. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      window.alert('An error occurred while saving your data.');
    }
  };

  return (
    <>
      <div className="w-full md:w-3/3 p-4 md:p-1 justify-center text-center flex">
        <div className="bg-white p-8 rounded-lg shadow-lg text-center animate__animated animate__fadeIn">
          {userData && (
            <>
              <h1 className="text-3xl font-bold text-blue-700 mb-2">
                Welcome {userData.name}
              </h1>
              <p className="text-sm text-gray-700">Sign in as {userData.email}</p>
              <img src={userData.picture} alt="" className="h-8 w-8 mx-auto" />
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
              {data
                .filter((item) => item.email === formData.email)
                .map((item, index) => (
                  <div key={index}>
                    {editIndex === index ? (
              
                      <>
                        <input
                          type="hidden"
                          name="email"
                          value={userData.email}
                          onChange={handleChange}
                        />
                        <InputField
                          label="Your Company"
                          name="companyname"
                          value={formData.companyname}
                          onChange={handleChange}
                          item={item.companyname}
                        />
                        <InputField
                          label="Your Address"
                          name="companyaddress"
                          value={formData.companyaddress}
                          onChange={handleChange}
                          item={item.companyaddress}
                        />
                        <InputField
                          label="Your Type of Business"
                          name="businesstype"
                          value={formData.businesstype}
                          onChange={handleChange}
                          item={item.businesstype}
                        />
                        <InputField
                          label="Your Company Number"
                          name="companynumber"
                          value={formData.companynumber}
                          onChange={handleChange}
                          item={item.companynumber}
                        />
                        <div className="text-center m-5">
                          <button
                            type="submit"
                            className="bg-blue-600 hover:bg-green-700  text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                          >
                            Done
                          </button>
                          <button
                            type="button"
                            className="bg-blue-600 hover:bg-red-700 ml-5 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                            onClick={() => setEditIndex(-1)}
                          >
                            Back
                          </button>
                        </div>
                      </>
                    ) : (
                 
                      <>
                        <p>Your Company: {formData.companyname }</p>
                        <p>Your Address: {formData.companyaddress}</p>
                        <p>Your Type of Business: {formData.businesstype}</p>
                        <p>Your Company Number: {formData.companynumber}</p>
                        <div className="text-center">
                          <button
                            type="button"
                            className="bg-blue-600 hover:bg-blue-700 p-5 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                            onClick={() => setEditIndex(index)}
                          >
                            Edit
                          </button>
                        </div>
                      </>
                    )}
                  </div>
                ))}
            </form>
          )}
        </div>
      </div>
      <Rentinfo/>
    </>
  );
};

export default HomeLogged;
