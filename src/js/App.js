import React from 'react';
import { Route, Routes } from 'react-router-dom';

import '../css/App.css';

import Navbar from '../components/navbar';
import Login from '../pages/login';
import Home from '../pages/home';
import Signin from '../pages/signin';
import Footer from '../components/footer';
import Error from '../pages/error';
import Profile from '../pages/profile';
import Departament from '../pages/departament-page';

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
          path={'/u/entrar'}
          element={<Login/>}
        />
        <Route
          path={'/u/cadastro'}
          element={<Signin/>}
        />
        <Route
          path={'/u/:usuario'}
          element={<Profile/>}
        />
        <Route
          path={'/u/:usuario/meus itens'}
          element={<Error/>}
        />
        <Route
          path={'/d/:departamento'}
          element={<Departament/>}
        />
        <Route
          path={'/d/:departamento/:subdepartamento'}
          element={<Error/>}
        />
        <Route
          path={'/d/:departamento/:subdepartamento/:itemID'}
          element={<Error/>}
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
