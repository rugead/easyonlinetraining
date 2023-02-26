import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { useAuth } from './../../AuthProvider';


export const UserLogin = () => {
  // State variables
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const {currentUser, doUserLogIn, lang} = useAuth()

  return (
    <>
    
    <form className=' mx-auto max-w-md '>
      <div className="prose">
        <h2>{lang.LOGIN_TITLE}</h2>
      </div>        
        <div className="form-control w-full max-w-xs">
          <label htmlFor="displayName" className="label">
            <span className="label-text">{lang.USERNAME_OR_EMAIL}</span>
          </label>
          <input
            className="input input-bordered w-full max-w-xs"
            type="text"
            name="username"
            onChange={(event) => setUsername(event.target.value)}
            placeholder={lang.USERNAME_OR_EMAIL}
            />
          
          <label htmlFor="displayName" className="label">
            <span className="label-text">{lang.PASSWORD}</span>
          </label>
          <input
            className="input input-bordered w-full max-w-xs"
            type="password"
            name="password"
            onChange={(event) => setPassword(event.target.value)}
            placeholder={lang.PASSWORD}
            />
          
          <button
            className='btn btn-outline mt-8'
            onClick={() => doUserLogIn(username, password)}
            type="button">
              {lang.LOGIN}
          </button>
          <label htmlFor="displayName" className="label">
            <span className="label-text"> Don't have an account? </span>
            <Link className="link link-hover" to="/signup"> {lang.REGISTER} </Link> 
          </label>
      </div>
    </form>
    {currentUser && <Navigate replace to="/courses/" />}
    </>
  );
};