import React from 'react';
import { Route, Routes } from 'react-router-dom';

import '../css/App.css';
import Navbar from '../components/navbar';
import Login from '../pages/login';
import Home from '../pages/home';
import Signin from '../pages/signin';
import Footer from '../components/footer';
import Error from '../pages/error';

function App() {

  return (
    <div className='app-container'>
      <Navbar/>
      <Routes>
        <Route
          index
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
        <Route
          path={'*'}
          element={<Error/>}
        />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
