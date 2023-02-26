import React from "react";
import { Outlet } from "react-router-dom";

export const Admin = () => { 
  return (
    <div className='w-full p-5'>
       <Outlet />
    </div>
  );
};