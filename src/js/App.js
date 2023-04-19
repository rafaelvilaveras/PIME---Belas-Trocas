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
import Departament from '../pages/departament.js';
import Subdepartament from '../pages/subdepartament';

function App() {

  return (
    <div className='flex-column app-container'>
      <Navbar/>
      <div className='inner-app-container'>
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
              element={<Subdepartament/>}
            />
            <Route
              path={'/i/:itemID'}
              element={<Error/>}
            />
            <Route
              path={'*'}
              element={<Error/>}
            />
          </Routes>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
