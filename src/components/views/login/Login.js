import React, { Fragment } from 'react'
import './Login.css'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import axios from 'axios';
import { useState } from "react";
import Modal from 'react-bootstrap/Modal';


const Login = ({ setUser }) => {
      //Creamos estados para el acceso al sistema principal
      const [email, setEmail] = useState("")
      const [password, setPassword ] = useState("")
      const [error, SetError] = useState(false)
      const [ErrMsg, setErrMsg] = useState(false)
      const handleCloseMsg = () => setmsgLogin(false);
      const handleShowLoginIncorrecto = () => setmsgLogin(true);
      const [msgLogin, setmsgLogin] = useState(false);

      const handleMsg = ()=>{
        handleShowLoginIncorrecto();
      }
       //traemos valores de BD mediante el servivio
      const HandleSubmit = async (e) => {
        e.preventDefault();
    
        if(email == "" || password == "")
          {
              SetError(true)
              return 
          }  
          SetError(false)
        try {
          //Servicio para el incio de sesion
          axios.post('http://localhost:5180/api/Users?email=' + email + '&password=' + password, {
          }).then((response) => {
            if (response.data.length > 0) {
              setUser([response.data[0].idUser])
            } else {
              handleMsg();
            }
          });
        } catch (err) {
            if (!err?.response) {
              setErrMsg("No Server Response");
            } else if (err.response?.status === 400) {
              setErrMsg("Missing Username or Password");
            } else if (err.response?.status === 401) {
              setErrMsg("Unauthorized");
            } else {
              setErrMsg("Login Failed");
            }
          };     
}

  return (
    <div>
        <><div>
            <h1>Acceso al sistema</h1>
        </div><Form onSubmit={HandleSubmit}>
           {error && <p className='errores'>Usuario y Contraseña obligatorios.</p>} 
                <Form.Group  className="mb-3" controlId="formGroupEmail">
                    <Form.Label>Correo Electronico</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)}/>
                </Form.Group>
                
                <Button variant="primary" type="submit">
                    Ingresar
                </Button>
                <Nav.Link href="#home">Ingresar como invitado...</Nav.Link>
                 
                <Fragment>
                      <Modal show={msgLogin} onHide={handleCloseMsg}>
                      <Modal.Header closeButton>
                      <Modal.Title>Login</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>Las credenciales ingresadas son incorrectas, intente nuevamente.</Modal.Body>
                      <Modal.Footer>
                      <Button variant="primary" onClick={handleCloseMsg}>
                          Aceptar
                      </Button>
                      </Modal.Footer>
                      </Modal>
                  </Fragment>

            </Form></>
                 
    </div>
  );
};

export default Login

