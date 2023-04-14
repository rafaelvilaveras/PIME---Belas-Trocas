import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import App from './js/App';
import reportWebVitals from './js/reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import userReducer from './redux-features/user-reducer';
import siteReducer from './redux-features/site-reducer';
import { configureStore } from '@reduxjs/toolkit';
import ScrollToTop from './js/scrollToTop';

const root = ReactDOM.createRoot(document.getElementById('root'));

const store = configureStore({
  reducer: {
    userR: userReducer,
    siteR: siteReducer,
  },
});


root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <ScrollToTop/>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();