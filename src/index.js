import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createRoot } from 'react-dom/client';

const root = createRoot(document.getElementById('root'));
//import { AuthProvider } from "./context/AuthProvider";

//const root = ReactDOM.createRoot(document.getElementById("root"));

//ReactDOM.render(
  root.render(
    
  <React.StrictMode>
    {/* <AuthProvider> */}
      <App />
    {/* </AuthProvider> */}
  </React.StrictMode>,
  
);