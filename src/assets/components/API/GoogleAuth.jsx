import React, { useState } from 'react';
import { GoogleLogin } from '@react-oauth/google';
import jwtDecode from 'jwt-decode';
import Home from '../logged/HomeLoged';

export default function GoogleAuth() {
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
        // Redirect to the Home component or handle it as needed
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
      {serverResponse && <Home data={serverResponse} />} {/* Assuming Home component receives server response */}
    </>
  );
}
