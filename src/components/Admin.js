import React from "react";
import { Outlet } from "react-router-dom";
// import { useAuth } from "../AuthProvider";

export const Admin = () => {
  // const { currentUser } = useAuth()
  
  return (
    <div className="w-full"> 
      <Outlet />
    </div>
  );
};