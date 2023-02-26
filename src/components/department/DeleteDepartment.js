import React from 'react';
import Parse from "parse";
import { useAuth } from '../../AuthProvider';
import { Button } from '../utilities/Button'

export const DeleteDepartment = (props) => {
  const {departmentId} = props
  const { lang } = useAuth()
 
  const doDeleteDepartment = async (departmentId) => {
    const Department = new Parse.Object('Department')
    Department.set('objectId', departmentId)
   
     try {
       await Department.destroy();
       alert(`${lang.SUCCESS} ${lang.DEPARTMENT} ${lang.DELETED}`);       
       return true
     } catch (error) {
       alert(`Error ${error.message}`)
       return false
     }
   }
    
  return (
    <Button
      onClick={() => doDeleteDepartment(departmentId)}
      type="submit"
      label={lang.DELETE}
    />
  );
};