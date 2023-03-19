import React from 'react';
import { Link } from 'react-router-dom'
import { UserLogout } from './user/UserLogout';
import { useAuth } from './../AuthProvider';
import { SelectField } from './utilities/SelectField';
export const Navbar = () => {
  const {currentUser, lang, setLang, de, en, allCourses} = useAuth();
  console.log('results: ', allCourses);
  
  const onChangehandler = (ev) => {
    const { value } = ev.target;
    if (value === 'DE') setLang(de)
    if (value === 'EN') setLang(en)
  }

  return (

<div className="navbar bg-base-100">
  <div className="flex-1">
    <Link className="btn btn-ghost normal-case text-xl px-3" to='/'>{lang.APP_TITLE}</Link>
  </div>
  <div className="flex-none">
    <SelectField
      dataArr={['DE','EN']}
      onChange={onChangehandler}  
    />   
  </div> 
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
      <li>
        <div className='h-20'> 
          {currentUser ? 'Hallo' : ""} {currentUser?.attributes?.username  || currentUser?.attributes?.email}

        </div>
      </li>
      {
      (currentUser && currentUser?.attributes?.role === 'admin')
      ? 
      <li tabIndex={0}>
        <a href='/#'>
          Admin
          <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
        </a>
        <ul className="p-2 bg-base-100">
        {allCourses && allCourses.map((object, index) => {
          return (
            <li key={index}>
               <Link to={`/admin/courses/${object.id}`}> {object.attributes?.courseTitle} </Link>
            </li>
          )
        })}
          
          <li>
            <Link to='/admin/department'> {lang.DEPARTMENT} </Link>
          </li>

             <li>
            <Link to='/admin/courses'> admin {lang.COURSE} </Link> 
          </li>
        </ul>
      </li>
      :
      ""
      }
      
      {
        currentUser
        ?
        <li> 
          <Link to='/courses'> {lang.COURSE} </Link> 
          <UserLogout />
        </li>
        :
        <li>
          <Link to='/login'>{lang.LOGIN_TITLE}</Link>
          <Link to="/signup"> {lang.REGISTER_TITLE} </Link>
        </li>
      }
    </ul>
  </div>
</div>
 
)}