import React, { useEffect, useState } from 'react';

export default function HomeLogged() {
  const [user, setUser] = useState(null);

  // When the component mounts, retrieve user data from localStorage
  useEffect(() => {
    const userData = localStorage.getItem('userdata');
    if (userData) {
      const parsedUser = JSON.parse(userData);
      setUser(parsedUser);
    }
  }, []);
  
  return (
    <>
      {user && (
        <div>
          <h1>{user.name}</h1>
          <p>{user.email}</p>
          <p>{user.family_name}</p>
          <img src={user.picture} alt="User Picture" />
        </div>
      )}
    </>
  );
}
