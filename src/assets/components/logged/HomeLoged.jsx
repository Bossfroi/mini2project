import React from 'react';
import Navigation from '../Navigation';
import NavigationLoged from './Navigationloged';

export default function HomeLoged({ isLoggedIn }) {
  return (
    <div>
      {isLoggedIn ? <NavigationLoged /> : <Navigation />}
    </div>
  );
}
