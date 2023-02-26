
import React, { useState } from 'react';
import Parse from "parse";
import { useAuth } from '../../AuthProvider';

import { Button } from '../utilities/Button';
import { InputField } from '../utilities/InputField';

export const CreateDepartment = () => {
  const { lang } = useAuth()
  // const navigate = useNavigate()// State variables
  const [department, setDepartment] = useState([]);

  // Functions used by the screen components
  const doCreateDepartment = async function () {

    if (!department) {
      alert('Bitte tragen Sie eine Abteilung ein')
      return
    }
    // Note that these values come from state variables that we've declared before
    const departmentValue = department;
    
    let Department = new Parse.Object('Department');
    Department.set('departmentName', departmentValue)
    
    try {
      await Department.save();
      alert('Success! Department was successfully created!'
      );
      setDepartment('')
      return true;
    } catch (error) {
      console.log('error: ', error);
      // signUp can fail if any parameter is blank or failed an uniqueness check on the server
      alert(`Error: ${error}`);
      return false;
    }
  };

  return (
    <div className="p-2 container">
      <div className="flex justify-between" >
        <InputField
          type="text"
          name="department"          
          value={department}
          onChange={(event) => setDepartment(event.target.value)}
          placeholder={lang.DEPARTMENT_NEW}
        />

        <Button
          onClick={() => doCreateDepartment()}
          type="submit"
          label={lang.DEPARTMENT_NEW}
          />
      </div>
    </div>
  );
};