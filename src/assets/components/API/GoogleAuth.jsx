import React, { useState, useEffect } from 'react';
import { GoogleLogin } from '@react-oauth/google';
import jwtDecode from 'jwt-decode';
import { Navigate } from 'react-router-dom'; // Siguruhing na-import ang 'Navigate'

export default function GoogleAuth() {
  const [user, setuser] = useState({});
  const [serverResponse, setServerResponse] = useState(null);

  const handleLoginSuccess = (credentialResponse) => {
    // I-decode ang natanggap na credentialResponse mula sa Google OAuth.
    const credentialResponseDecode = jwtDecode(credentialResponse.credential);
    console.log(credentialResponseDecode);

    // I-convert ang decoded credentialResponse sa JSON format.
    const credentialResponseJSON = JSON.stringify(credentialResponseDecode);
    console.log(credentialResponseJSON);

    // I-send ang JSON na credentialResponse sa server gamit ang HTTP POST request.
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
    
      {serverResponse && <Navigate to="/index" state={serverResponse} />}
    </>
  );
}
