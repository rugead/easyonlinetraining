import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { useAuth } from './../../AuthProvider';

import { Button } from '../utilities/Button';
import { H1  } from '../utilities/Headline';
import { InputField } from '../utilities/InputField';


export const UserLogin = () => {
  // State variables
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const {currentUser, doUserLogIn, lang} = useAuth()

  return (
    <div>
      {currentUser && <Navigate replace to="/courses/" />}
      <div className="">
        <H1>{lang.LOGIN_TITLE}</H1>
        <div className="">
          <InputField
            label={lang.USERNAME_OR_EMAIL}
            type="text"
            name="username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            placeholder={lang.USERNAME_OR_EMAIL}
          />
          <InputField
            label={lang.PASSWORD}
            type="password"
            name="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder={lang.PASSWORD}
          />
          
          <div className="pt-2"> 
            <Button
              onClick={() => doUserLogIn(username, password)}
              type="submit"
              label={lang.LOGIN}
              />
          </div>
          
          <div className="p-2 flex items-start">
            <label className="p-2 flex-shrink w-60 ">
              <span className=""> </span>
            </label>
            <div className="p-2 m-3 w-full" >
                Don't have an account? 
                <Link className="cursor-pointer text-blue-400" to="/signup"> {lang.REGISTER} </Link> 
            </div> 
          </div>
        </div>
      </div>
    </div>
  );
};