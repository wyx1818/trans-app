import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ThemeProvider } from 'styled-components';

import SplashScreen from 'Layout/core/SplashScreen';
import store, { persistor } from 'redux/store';
import RootRoutes from './Routes';

const App: React.FC = () => (
  /* Provide Redux store */
  <Provider store={store}>
    {/* Asynchronously persist redux stores and show `SplashScreen` while it's loading. */}
    <PersistGate persistor={persistor}>
      {/* Add high level `Suspense` in case if was not handled inside the React tree. */}
      <React.Suspense fallback={<SplashScreen />}>
        {/* Provide theme change */}
        <ThemeProvider theme={{ mode: 'light' }}>
          {/* React browser router */}
          <BrowserRouter>
            {/* Render routes whit provided `Layout` */}
            <RootRoutes />
          </BrowserRouter>
        </ThemeProvider>
      </React.Suspense>
    </PersistGate>
  </Provider>
);

export default App;
