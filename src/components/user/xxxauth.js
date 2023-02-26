import React, { useState } from "react";
import Parse from "parse";
import { useNavigate } from 'react-router-dom' 

import { Button } from "../utilities/Button";
import { InputField } from "../utilities/InputField";

export const Auth = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const [isRegistering, setIsRegistering] = useState(false);

  const navigate = useNavigate();

  const handleLogin = () => {
    const user = new Parse.User();
    
    user.set('username', userName);
    user.set('password', password);

    user.logIn().then((user) => {
      navigate('/')
    }).catch(err => {      
      alert(err.message);
    });
  };
  const handleRegister = () => {
    const user = new Parse.User();
    
    user.set('username', userName);
    user.set('password', password);

    user.signUp().then(() => {
      handleLogin();
    }).catch(err => alert(err.message));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isRegistering) {
      handleRegister();
      return;
    }
    handleLogin();
  };
  const toggleIsRegistering = () => setIsRegistering(!isRegistering);

  const [toggleRegisterText, authActiontext] = isRegistering
    ? ["use an existing account", "Register"]
    : ["Create an account", "Login"];

  return (
    <div className="bg-gray-200 w-full">
      <h1>Auth</h1>

      <form className="" onSubmit={handleSubmit}>
      


        <InputField
          label="Username"
          type="text"
          placeholder="Username"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          />
       
     
        <InputField
          label="Passwort"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          />
   
        
        <div>
        <Button type="submit" name='xname' label={authActiontext} /> or {' '}
        <span className="cursor-pointer text-blue-400" onClick={toggleIsRegistering}>{toggleRegisterText}</span>

        </div>
      </form>
    </div>
  );
};

// export default Auth;