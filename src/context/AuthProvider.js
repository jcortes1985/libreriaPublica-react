import { useContext, createContext } from "react";
import { useNavigate } from "react-router-dom";

import NavBar from "../components/views/menu/NavBar";

import { useState } from "react";
import axios from "axios";
import { Alert } from "bootstrap";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("site") || "");
  const [post, setPost] = useState("");
  const [idUser, setidUser] = useState("");
  //jcr//const NavBar = useNavigate();

  const loginAction = async (data) => {
    try {
        //alert('entro a loginAction')
      
      const userData = {
        email: data.email,
        password: data.password //This should be encoded
      }

      /*
        axios.post('http://localhost:5180/api/Users', userData)
        .then(res => {
            Response = res.data
            if (response.status == 'success') {
              const user = response.idUser
              
            } else {
              alert('Something went wrong while creating account')
            }
        })
*/
       axios.post('http://localhost:5180/api/Users?email=' + data.email + '&password=' + data.password, {
        email: data.email,
        password: data.password
      })
      .then((response) => {
        //console.log(response);
        console.log(response.data);
        if (response.data.length > 0) {
          setUser(response.data[0].idUser);
          setToken(response.data[0].password);
          localStorage.setItem("site", response.data[0].password);
          NavBar("/NavBar");
          //procesaResultado(response.data[0]);

        } else {
          alert('Usuario o contraseña invalidos.')
        }
        
      });

      throw new Error(post.message);

    } catch (err) {
      console.error('Error controlado: ' + err);
    }
  };

  const procesaResultado = (datos) =>{
    alert('procesaDatos');
    console.log(post);
  }



  const logOut = () => {
    setUser(null);
    setToken("");
    localStorage.removeItem("site");
    NavBar("/NavBar");
  };

  return (
    <AuthContext.Provider value={{ token, user, loginAction, logOut }}>
      {children}
    </AuthContext.Provider>
  );

};

export default AuthProvider;

export const UseAuth = () => {
  return useContext(AuthContext);
};