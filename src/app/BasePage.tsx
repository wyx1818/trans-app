import * as React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import SplashScreen from '../Layout/core/SplashScreen';
import Home from './pages/Home';

const BasePage: React.FC = () => (
  <React.Suspense fallback={<SplashScreen />}>
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />

      <Route path="/home" element={<Home />} />
    </Routes>
  </React.Suspense>
);

export default BasePage;
