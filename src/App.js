import React from 'react';
import './App.css';
import NavBar from './components/views/menu/NavBar';
import Home from './components/views/menu/Home';
import ListaLibros from './components/views/catalogs/libros/ListaLibros.js';
import UsuarioLogin from './components/views/login/usuarioLogin.js';
import TransaccionLibros from './components/views/transactions/TransaccionLibros.js';

import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';
import Login from './components/views/login/Login.js';
import AuthProvider from './context/AuthProvider.js';
import { useState } from 'react'
import PrivateRoute from './context/PrivateRoute.js';
import { Switch } from 'react-router-dom/cjs/react-router-dom.min.js';


function App() {
   //Creamos el estado que validara si envia o no a la página de inicio
   const [user, setUser] = useState([])

  return (
    <>
      <div className='App'>
      {
        user.length > 0 
        ?  <Router>
          {/* <AuthProvider> */}
          <NavBar user ={user} setUser ={setUser}/>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/listaLibros/' component={ListaLibros} />
            <Route path='/gestionLibros/' component={TransaccionLibros} />
            {/* <Route path='/login/' component={Login} /> */}
          </Switch>
          {/* </AuthProvider> */}
        </Router>
         : <Login setUser ={setUser} /> 
        // : <UsuarioLogin setUser ={setUser} /> 
      }
    

      </div>
      
    </>
  );
}

export default App;
