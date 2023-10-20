import React, { useEffect } from 'react';

export default function Logout() {
  const loginPageURL = '/login';

  const handleLogout = () => {
    window.location.reload();
    window.location.href = loginPageURL;
  };
  useEffect(() => {
    handleLogout();
  }, []); 

  return <></>;
}
