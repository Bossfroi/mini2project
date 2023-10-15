import React from 'react'
import { GoogleLogin } from '@react-oauth/google';
import jwtDecode from 'jwt-decode';
export default function GoogleAuth() {
  return (
<>
<GoogleLogin
  onSuccess={credentialResponse => {
    const credentialResponseDecode = jwtDecode(credentialResponse.credential)
    console.log(credentialResponseDecode);
  }}
  onError={() => {
    console.log('Login Failed');
  }}
/>
</>
   
  )
}
