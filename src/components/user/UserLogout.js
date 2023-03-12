import React from 'react';
import { useAuth } from './../../AuthProvider';


export const UserLogout = () => {
  const { doUserLogOut, lang} = useAuth()
  
  return ( 
    <>
      <span className="cursor-pointer" onClick={() => doUserLogOut()} >
        {lang.LOGOUT} 
      </span>
    </>
   );
}
 