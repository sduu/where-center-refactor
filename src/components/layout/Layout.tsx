import React from 'react';
import { Outlet } from 'react-router-dom';
import { LayoutWrapper } from './Layout.styled';

const Layout = () => {
  return (
    <LayoutWrapper>
      <main className='main-wrapper'>
        <Outlet />
      </main>
    </LayoutWrapper>
  );
};

export default Layout;
