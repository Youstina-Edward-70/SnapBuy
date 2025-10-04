import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { BrowserRouter } from "react-router";

const root = ReactDOM.createRoot(document.getElementById('root'));
const basename = process.env.REACT_APP_BASENAME || "/";
root.render(
  <React.StrictMode>
    <BrowserRouter basename={basename}>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
