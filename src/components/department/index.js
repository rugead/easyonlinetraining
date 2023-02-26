import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../AuthProvider';
import { H1 } from '../utilities/Headline';
import { CreateDepartment } from './CreateDepartment';
import { ListDepartments } from './ListDepartments';

export const Department = () => {
  const { currentUser, lang } = useAuth();

  return ( 
    <div>
      <H1>{lang.DEPARTMENT}</H1>
      {!currentUser && <Navigate replace to="/login" />}
      <CreateDepartment />
      <ListDepartments />
    </div>
  )
}
 