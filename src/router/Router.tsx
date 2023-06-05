import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Spinner from '../components/common/spinner/Spinner';
import Layout from '../components/layout/Layout';

const MainPage = lazy(() => import('../pages/mainPage/MainPage'));
const MapPage = lazy(() => import('../pages/mapPage/MapPage'));
const NotFoundPage = lazy(() => import('../pages/notFoundPage/NotFoundPage'));

const Router = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route element={<Layout />}>
            <Route path='/' element={<MainPage />} />
            <Route path='/map' element={<MapPage />} />
            <Route path='*' element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default Router;
