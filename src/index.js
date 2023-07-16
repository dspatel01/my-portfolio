
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from './components/ScrollToTop';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter basename='/myportfolio'>
  <ScrollToTop />
    <App />
  </BrowserRouter>
);


