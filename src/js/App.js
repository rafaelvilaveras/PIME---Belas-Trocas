import React from 'react';
import { Route, Routes } from 'react-router-dom';

import '../css/App.css';
import Navbar from '../components/navbar';
import Login from '../pages/login';
import Home from '../pages/home';
import Signin from '../pages/signin';
import Footer from '../components/footer';

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route
          path={'/'}
          element={<Home/>}
        />
        <Route
          path={'/entrar'}
          element={<Login/>}
        />
        <Route
          path={'/cadastro'}
          element={<Signin/>}
        />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
