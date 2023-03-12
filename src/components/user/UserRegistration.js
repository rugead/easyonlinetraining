import React, { useState } from 'react';
// import Parse from 'parse/dist/parse.min.js';
import { Navigate } from 'react-router-dom';
import Parse from "parse";
import { InputField } from '../utilities/InputField';
import { Button } from '../utilities/Button';
import { H2 } from '../utilities/Headline';
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
    <div>
      {currentUser && <Navigate replace to="/verify-email/" />}

      <div className="container">
        <H2>{lang.REGISTER_TITLE}</H2>
        <div className="">

        {/* <InputField
            label={lang.USERNAME}
            type="text"
            name="username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            placeholder={lang.USERNAME}
          /> */}
          
          <InputField
            label={lang.FIRSTNAME}
            type="text"
            name="firstname"
            value={firstname}
            onChange={(event) => setFirstname(event.target.value)}
            placeholder={lang.FIRSTNAME}
          />
          
          <InputField
            label={lang.LASTNAME}
            type="text"
            name="lastname"
            value={lastname}
            onChange={(event) => setLastname(event.target.value)}
            placeholder={lang.LASTNAME}
          />

          <InputField
            label={lang.EMAIL}
            type="email"
            name="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder={lang.EMAIL}
          />
          
          <InputField
            label={lang.PERSONAL_NUMBER}
            type="text"
            name="employeeId"            
            value={employeeId}
            onChange={(event) => setEmployeeId(event.target.value)}
            placeholder={lang.PERSONAL_NUMBER}
          />

          {/* <InputField
            label={lang.DEPARTMENT}
            type="text"
            name="department"          
            value={department}
            onChange={(event) => setDepartment(event.target.value)}
            placeholder={lang.DEPARTMENT}
          /> */}

          <InputField
            label={lang.PASSWORD}
            type="password"
            name="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder={lang.PASSWORD}
          />
          <InputField
            label={lang.PASSWORD_CONFIRM}
            type="password"
            name="passwordConfirm"
            value={passwordConfirm}
            onChange={(event) => setPasswordConfirm(event.target.value)}
            placeholder={lang.PASSWORD_CONFIRM}
          />


        </div>
        <div className="pt-2">

          <Button
            onClick={() => doUserRegistration()}
            type="submit"
            label={lang.REGISTER}
            />
        </div>
      </div>
    </div>
  );
};