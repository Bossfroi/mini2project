import React, { useState } from 'react';
import { GoogleLogin } from '@react-oauth/google'; 
import jwtDecode from 'jwt-decode';
import { useNavigate } from 'react-router-dom';

export default function GoogleAuth() {
  const [serverResponse, setServerResponse] = useState(null);
  const navigate = useNavigate();

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
        setServerResponse(data);
        navigate('/Dashboard'); // Navigate to the Dashboard route
      } else {
        console.error('Server responded with an error:', response.statusText);
      }
    } catch (error) {
      console.error('Error sending data to the server:', error);
    }
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

 
      {serverResponse && <div>{JSON.stringify(serverResponse)}</div>}
    </>
  );
}
