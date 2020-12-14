import * as React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { shallowEqual, useSelector } from 'react-redux';

import { RootState } from 'redux/rootReducer';
import BasePage from './BasePage';
import Login from './modules/Auth/pages/Login';

const RootRoutes: React.FC = () => {
  const { isAuthorized } = useSelector((state: RootState) => ({ isAuthorized: state.auth.user !== '' }), shallowEqual);

  return (
    <Routes>
      {!isAuthorized ? (
        <Route path="/auth/login" element={<Login />} />
      ) : (
        <Route path="/auth/*" element={<Navigate to="/" replace />} />
      )}
      <Route
        path="*"
        element={
          /* Redirect to `/auth` when user is not authorized */
          !isAuthorized ? <Navigate to="/auth/login" /> : <BasePage />
        }
      />
    </Routes>
  );
};

export default RootRoutes;
