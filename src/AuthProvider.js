import React, { createContext, useContext, useState } from 'react';
import { Parse } from 'parse';
import { useParseQuery } from "@parse/react";

import { de, en} from './components/lang'

const AuthContext = createContext(null)

const parseQuery = new Parse.Object("Course");


export const AuthProvider = ({children}) => {
  const [currentUser, setCurrentUser] = useState(null)
  const [lang, setLang] = useState(de);
  // const [getAllCourses] = useState(results)
  // console.log('lang: ', lang);
  // console.log('currentUser: ', currentUser);
  const  { results: allCourses  } = useParseQuery(
    parseQuery, // The Parse Query to be used
    {
      enabled: true, // Enables the parse query (default: true)
      enableLocalDatastore: true, // Enables cache in local datastore (default: true)
      enableLiveQuery: true // Enables live query for real-time update (default: true)
    }
  );


  const getCurrentUser = async function () {
    const currentUser = await Parse.User.current();
    // Update state variable holding current user
    setCurrentUser(currentUser);
    return currentUser;
  };

  // const getLang = async function () {
  //   // const currentLang = await Parse.User.current();
  //   // Update state variable holding current user
  //   setLang(currentUser);
  //   return currentUser;
  // };

  const doUserLogIn = async function (username, password) {
    // Note that these values come from state variables that we've declared before
    const usernameValue = username;
    const passwordValue = password;
    try {
      const loggedInUser = await Parse.User.logIn(usernameValue, passwordValue);
      // logIn returns the corresponding ParseUser object
      alert(
        `Success! User ${loggedInUser.attributes.firstname + ' ' + loggedInUser.attributes.lastname} has successfully signed in!`
      );
      console.log('loggedInUser: ', loggedInUser);
      // To verify that this is in fact the current user, `current` can be used
      // const currentUser = await Parse.User.current();
      // Clear input fields
      // setUsername('');
      // setPassword('');
      // Update state variable holding current user
      getCurrentUser();
      return true;
    } catch (error) {
      // Error can be caused by wrong parameters or lack of Internet connection
      alert(`${error.message}`);
      return false;
    }
  };

  const doUserLogOut = async function () {
    try {
      await Parse.User.logOut();
      // To verify that current user is now empty, currentAsync can be used
      const currentUser = await Parse.User.current();
      if (currentUser === null) {
        alert('Success! No user is logged in anymore!');
      }
      // Update state variable holding current user
      getCurrentUser();
      return true;
    } catch (error) {
      alert(`Error! ${error.message}`);
      return false;
    }
  };

  const value= {
    currentUser,
    doUserLogIn,
    doUserLogOut,
    setLang,
    lang,
    de, 
    en,
    allCourses,
  }


  return (  
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  return useContext(AuthContext)
}
 
// export default AuthProvider;