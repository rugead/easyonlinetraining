import React from 'react';
import {Link } from 'react-router-dom'
import { UserLogout } from './user/UserLogout';
import { useAuth } from './../AuthProvider';
import { SelectField } from './utilities/SelectField';
// import { ButtonLang } from './utilities/Button';
export const Navbar = () => {
  const {currentUser, lang, setLang, de, en} = useAuth();
  

  const onChangehandler = (ev) => {
    const { value } = ev.target;
    if (value === 'DE') setLang(de)
    if (value === 'EN') setLang(en)
  }

  return (
    <>
      <div className='bg-primary'>
        <div className='container mx-auto py-5 flex justify-between'>

          <Link to='/'>{lang.APP_TITLE}</Link>
          <SelectField dataArr={['DE','EN']} onChange={onChangehandler} />
          <span> 
            {currentUser ? 'Hallo' : ""} {currentUser?.attributes?.username  || currentUser?.attributes?.email}
          </span>

          {
            currentUser
            ?
            <div> 
              <Link to='/courses'> {lang.COURSE} </Link> {' | '}
              <UserLogout />
            </div>
            :
            <div>
              <Link to='/login'>{lang.LOGIN_TITLE}</Link> {' | '}
              <Link to="/signup"> {lang.REGISTER_TITLE} </Link>
            </div>
          }
        </div>
      </div>
      {
        (currentUser && currentUser?.attributes?.role === 'admin')
        ? 
        <div className='bg-base-300 '>
          <div className='container mx-auto py-3'>
            {/* <Link to='/admin/department'> {lang.DEPARTMENT} </Link> {' | '} */}
            <Link to='/admin/courses'> {lang.COURSES} </Link> {' | '}
            <Link to={`/admin/courses/new`}>{lang.NEW + ' ' + lang.COURSE}</Link>
          </div>
        </div> 
        :   
        ''
      }
    </>
  );
};
 