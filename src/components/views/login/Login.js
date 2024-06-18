import React from 'react'
import { useState } from 'react'
import './Login.css'

function Login({ setUser }) {
      //Creamos estados para el acceso al sistema principal
    const [usuario, setUsuario] = useState("")
    const [contrasena, setContrasena] = useState("")
    const [error, SetError] = useState(false)

    //Metodo ejecutado al presionar el Botón Ingresar
    const handleSubmit = (e)=> {
        e.preventDefault()
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


    return  (
        <div className='login'>
        <section>
            <h2>Acceso al Sistema</h2>
            <img src="https://2.bp.blogspot.com/-8xWgNPyQ1-8/UY2NdOg6psI/AAAAAAAAABA/SSlXTrN1RDA/s350/1bf5913a0ba79bfbd8d646421884841bba5e3c4e.jpg"  width="100%" alt=""></img>
            {error && <p className='errores'>Usuario y Contraseña obligatorios.</p>}
            <form className='data' onSubmit={handleSubmit}>
                <div>
                <label htmlFor="">Usuario:</label>
                <input type="text" value={usuario} onChange={e => setUsuario(e.target.value)}/>
                </div>
                <div>
                <label htmlFor="">Contraseña: </label>
                <input type="password" value={contrasena} onChange={e => setContrasena(e.target.value)} />
                </div>
                <button>Ingresar</button>
               
            </form>
            <a href="url">Entrar como invitado...</a>
        </section>
        </div>

  )
}

export default Login
