import React from 'react';
import ReactDOM from 'react-dom';

import './i18n/i18next';
import reportWebVitals from './reportWebVitals';
import App from './app/App';

const render = () => {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root'),
  );
};
render();

// When in the development environment, automatically hot reload
if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('./app/App', render);
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
