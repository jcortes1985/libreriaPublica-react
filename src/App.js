import React from 'react';
import './App.css';
import NavBar from './components/views/menu/NavBar';
import Home from './components/views/menu/Home';
import ListaLibros from './components/views/catalogs/libros/ListaLibros.js';
import GestionLibros from './components/views/transactions/GestionarLibros.js';

import { BrowserRouter as Router, Switch, Route  } from 'react-router-dom';
import Login from './components/views/login/Login.js';

import { useState } from 'react'

function App() {

   //Creamos el estado que validara si envia o no a la página de inicio
   const [user, setUser] = useState([])


  return (
    <>
      <div className='App'>
      {
         user.length > 0 
         ?  <Router>
            <NavBar user ={user} setUser ={setUser}/>
            <Switch>
              <Route path='/' exact component={Home} />
              <Route path='/listaLibros/' component={ListaLibros} />
              <Route path='/gestionLibros/' component={GestionLibros} />
              {/* <Route path='/login/' component={Login} /> */}
            </Switch>
          </Router>
         : <Login setUser ={setUser} /> 
 
      }


      </div>
      
    </>
  );
}

export default App;
