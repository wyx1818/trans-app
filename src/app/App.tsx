import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';

import SplashScreen from 'Layout/core/SplashScreen';
import Routes from './Routes';

const App: React.FC = () => (
  <React.Suspense fallback={<SplashScreen />}>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </React.Suspense>
);

export default App;
