import React, { useState, useEffect } from 'react';
import { GoogleLogin } from '@react-oauth/google';
import jwtDecode from 'jwt-decode';
import { Navigate } from 'react-router-dom'; 

export default function GoogleAuth() {
  const [user, setuser] = useState({});
  const [serverResponse, setServerResponse] = useState(null);

  const handleLoginSuccess = (credentialResponse) => {
  
    const credentialResponseDecode = jwtDecode(credentialResponse.credential);
    console.log(credentialResponseDecode);

    const credentialResponseJSON = JSON.stringify(credentialResponseDecode);
    console.log(credentialResponseJSON);

 
    fetch('http://localhost:5000/authGoogle/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: credentialResponseJSON,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Server response:', data);
        setServerResponse(data);
      })
      .catch((error) => {
        console.error('Error sending data to the server:', error);
      });
  };

  const handleLoginError = () => {
    console.log('Login Failed');
  };

  return (
    <>
      <GoogleLogin
        onSuccess={handleLoginSuccess}
        onError={handleLoginError}
      />
    
  {serverResponse && <Navigate to="/Dashboard" state={serverResponse} />}
  
    </>
  );
}
