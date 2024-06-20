import React from 'react'
import { useState, useEffect } from 'react'
import './Login.css'
import Form from 'react-bootstrap/Form';
import FormGroup from 'react-bootstrap/FormGroup'
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';


function Login({ setUser }) {

      //Creamos estados para el acceso al sistema principal
      const [usuario, setUsuario] = useState("")
      const [contrasena, setContrasena] = useState("")
      const [error, SetError] = useState(false)
  
      //Metodo ejecutado al presionar el Botón Ingresar
      const handleSubmit = (e)=> {
          e.preventDefault()
  
          //traemos valores de BD
  
          //Validamos que el usuario y/o contraseña no esten vacios
          if(usuario == "" || contrasena == "")
              {
                  SetError(true)
                  return 
              }  
              SetError(false)
              //En caso de que la autenticación sea correcta seteamos el usuario con a la variable User 
              setUser([usuario])
      
            }



  return (
    <div>
        <><div>
            <h1>Acceso al sistema</h1>
        </div><Form onSubmit={handleSubmit}>
        {error && <p className='errores'>Usuario y Contraseña obligatorios.</p>}
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>Correo Electronico</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" value={usuario} onChange={e => setUsuario(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control type="password" placeholder="Password" value={contrasena} onChange={e => setContrasena(e.target.value)}/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Ingresar
                </Button>
                <Nav.Link href="#home">Ingresar como invitado...</Nav.Link>
            </Form></>
    </div>
  )
}

export default Login

