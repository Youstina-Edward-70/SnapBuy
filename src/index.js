import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

// نحدد basename تلقائي حسب البيئة
let basename = '/';
if (process.env.REACT_APP_BASENAME) {
  basename = process.env.REACT_APP_BASENAME; // GitHub Pages
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter basename={basename}>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
