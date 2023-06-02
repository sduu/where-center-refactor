import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from '@/pages/mainPage/MainPage';
import MapPage from '@/pages/mapPage/MapPage';
import NotFoundPage from '@/pages/notFoundPage/NotFoundPage';
import SplashPage from '@/pages/splashPage/SplashPage';
import Layout from '@/components/layout/Layout';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<SplashPage />} />
          <Route path='/main' element={<MainPage />} />
          <Route path='/map' element={<MapPage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
