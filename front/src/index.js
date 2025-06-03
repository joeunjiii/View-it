import React from 'react';
import ReactDOM from 'react-dom/client';
import Main from './mainpage/main'; // or Login from './login/login'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);