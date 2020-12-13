import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import BasePage from './BasePage';

const RootRoutes: React.FC = () => (
  <Routes>
    <Route path="*" element={<BasePage />} />
  </Routes>
);

export default RootRoutes;
