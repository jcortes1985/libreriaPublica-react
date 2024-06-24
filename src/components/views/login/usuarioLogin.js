import { useState } from "react";
//import { UseAuth } from "../../../context/AuthProvider";
//import { AuthProvider } from "../../../context/AuthProvider";
import { UseAuth } from "../../../context/AuthProvider";


const UsuarioLogin = () => {

  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const auth = UseAuth();
  const HandleSubmitEvent = (e) => {
    e.preventDefault();
    //alert(input.email)
    //alert(input.password)

    if (input.email !== "" && input.password !== "") {
      //alert('antes del loginAction')
        auth.loginAction(input);
        return;
    }
    alert("please provide a valid input");
  };

  const HandleInput = (e) => {
    const { name, value } = e.target;

      setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <form onSubmit={HandleSubmitEvent}>
      <div className="form_control">
        <label htmlFor="user-email">Email:</label>
        <input
          type="email"
          id="user-email"
          name="email"
          placeholder="example@yahoo.com"
          aria-describedby="user-email"
          aria-invalid="false"
          onChange={HandleInput}
        />
        <div id="user-email" className="sr-only">
          Please enter a valid username. It must contain at least 6 characters.
        </div>
      </div>
      <div className="form_control">
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          aria-describedby="user-password"
          aria-invalid="false"
          onChange={HandleInput}
        />
        <div id="user-password" className="sr-only">
          your password should be more than 6 character
        </div>
      </div>
      <button className="btn-submit">Submit</button>
    </form>
  );
};

export default UsuarioLogin;