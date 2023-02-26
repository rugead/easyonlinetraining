import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import Parse from "parse";
import { useAuth } from '../../AuthProvider'

export const UserRegistration = () => {
  const { lang } = useAuth()
  // console.log('lang: ', lang);
  // State variables
  // const [username, setUsername] = useState('');
  // const [role, setRole] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('')
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [currentUser, setCurrentUser] = useState('');
  
  console.log('passwordConfirm: ', passwordConfirm);
  console.log('password: ', password);
  
  // const [companyId, setCompanyId] = useState('');
  // const [department, setDepartment] = useState('')
  const [employeeId, setEmployeeId] = useState('');

  // Functions used by the screen components
  const doUserRegistration = async function () {
    // setCompanyId('Firmenname/Companyname')
    // setDepartment('Abteilung/Department')
    // setRole('trainee')
    // if (!username) {
    //   alert(lang.REGISTER_NO_USERNAME)
    //   return
    // }

    if (password !== passwordConfirm) {
      // console.log('passwordConfirm: ', passwordConfirm);
      // console.log('password: ', password);
      alert(lang.REGISTER_MATCH_PASSWORD)
      return
    }
    if (!email) {
      alert(lang.REGISTER_NO_EMAIL)
      return
    }
    if (!lastname || !firstname) {
      alert(lang.REGISTER_NO_NAME)
      return
    }
    // if (!department) {
    //   alert(lang.REGISTER_NO_DEPARTMENT)
    //   return
    // }
    // if (!companyId) {
    //   alert("Bitte geben Sie die Unternehmensnummer an")
    //   return
    // }
    if (!employeeId) {
      alert(lang.REGISTER_NO_PERSONALNUMBER)
      return
    }
    // Note that these values come from state variables that we've declared before
    // const usernameValue = email;
    const firstnameValue = firstname;
    const lastnameValue = lastname;
    const emailValue = email;
    const passwordValue = password;
    const companyIdValue = 'companyIdName';
    const departmentValue = 'departmentName';
    const employeeIdValue = employeeId;
    const roleValue = 'trainee';

    const user = new Parse.User()
    
    user.set('username', email + '#' + companyIdValue )
    user.set('firstname', firstnameValue)
    user.set('lastname', lastnameValue)
    user.set('email', emailValue)
    user.set('password', passwordValue)
    user.set('companyId', companyIdValue)
    user.set('department', departmentValue)
    user.set('employeeId', employeeIdValue)
    user.set('role', roleValue)

    try {
      // Since the signUp method returns a Promise, we need to call it using await
      // const createdUser = await Parse.User.signUp(usernameValue, passwordValue);
      await user.signUp();
      setCurrentUser(user)
      alert(
        `Success! User was successfully created!`
      );
      return true;
    } catch (error) {
      console.log('error: ', error);
      // signUp can fail if any parameter is blank or failed an uniqueness check on the server
      alert(`Error something went wrong: ${error.message}`);
      return false;
    }
  };

  return (
    <form className=' mx-auto max-w-md '>
      {currentUser && <Navigate replace to="/verify-email/" />}

      <div className="prose">
        <h2>{lang.REGISTER_TITLE}</h2>
      </div>

      <div className="form-control w-full max-w-xs">

        <label htmlFor="displayName" className="label">
          <span className="label-text">{lang.FIRSTNAME}</span>
        </label>
        <input
            className="input input-bordered w-full max-w-xs"
            type="text"
            name="firstname"
            onChange={(event) => setFirstname(event.target.value)}
            placeholder={lang.FIRSTNAME}
        />
        
        <label htmlFor="displayName" className="label">
          <span className="label-text">{lang.LASTNAME}</span>
        </label>
        <input
            className="input input-bordered w-full max-w-xs"
            type="text"
            name="lastname"
            onChange={(event) => setLastname(event.target.value)}
            placeholder={lang.LASTNAME}
        />
        
        <label htmlFor="displayName" className="label">
          <span className="label-text">{lang.EMAIL}</span>
        </label>
        <input
            className="input input-bordered w-full max-w-xs"
            type="email"
            name="email"
            onChange={(event) => setEmail(event.target.value)}
            placeholder={lang.EMAIL}
        />
        <label htmlFor="displayName" className="label">
          <span className="label-text">{lang.PERSONAL_NUMBER}</span>
        </label>
        <input
            className="input input-bordered w-full max-w-xs"
            type="text"
            name="empoyeeId"
            onChange={(event) => setEmployeeId(event.target.value)}
            placeholder={lang.PERSONAL_NUMBER}
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

        <label htmlFor="displayName" className="label">
          <span className="label-text">{lang.PASSWORD_CONFIRM}</span>
        </label>
        <input
            className="input input-bordered w-full max-w-xs"
            type="password"
            name="passwordConfirm"
            onChange={(event) => setPasswordConfirm(event.target.value)}
            placeholder={lang.PASSWORD_CONFIRM}
        />

        <button
          className='btn btn-outline mt-8'
          onClick={() => doUserRegistration()}
          type="button">
            {lang.REGISTER}
        </button>
      </div>
    </form>
  );
};