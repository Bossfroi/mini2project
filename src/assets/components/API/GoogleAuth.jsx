import React, { useState } from 'react';
import { GoogleLogin } from '@react-oauth/google'; // Assuming this is a valid library
import jwtDecode from 'jwt-decode';
import { useNavigate } from 'react-router-dom';
import { useBearStore } from '../Navigation';

export default function GoogleAuth() {
  const [serverResponse, setServerResponse] = useState(null);
  const navigate = useNavigate();
  const setIsAuthenticated = useBearStore((state) => state.setIsAuthenticated);

  const handleLoginSuccess = async (credentialResponse) => {
    try {
      const credentialResponseDecode = jwtDecode(credentialResponse.credential);
      console.log(credentialResponseDecode);

      const credentialResponseJSON = JSON.stringify(credentialResponseDecode);
      console.log(credentialResponseJSON);

      const response = await fetch('http://localhost:5000/authGoogle/addOrUpdate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: credentialResponseJSON,
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Server response:', data);
        setIsAuthenticated(true);
        localStorage.setItem('userdata', response);      // Store user data in localStorage
        setServerResponse(data);
        window.alert('Successful Login');
        navigate('/Dashboard');
        localStorage.setItem('userdata', credentialResponseJSON); 
      } else {
        console.error('Server responded with an error:', response.statusText);
      }
    } catch (error) {
      console.error('Error sending data to the server:', error);
    }
  };

  const handleLoginError = () => {
    console.error('Login Failed');
  };

  return (
    <>
      <GoogleLogin
        onSuccess={handleLoginSuccess}
        onError={handleLoginError}
      />

      {serverResponse && <div>{JSON.stringify(serverResponse)}</div>}
    </>
  );
}
