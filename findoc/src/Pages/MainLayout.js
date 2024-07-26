import React from 'react';
import NavBar from '../Components/NavBar/NavBar';

const MainLayout = ({ children }) => {
  return (
    <div>
      <NavBar />
      <main>{children}</main>
    </div>
  );
};

export default MainLayout;
