import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import "remixicon/fonts/remixicon.css";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./index.css"

import store from './store/store';
import { Provider } from 'react-redux';

import { BrowserRouter as Router } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <AnimatePresence>
    <Router>
      <Provider store={store}>
      <App />
      
      </Provider> 
    </Router>
    </AnimatePresence>
    
  </React.StrictMode>,
);