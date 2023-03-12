import React from "react";
// import { Outlet } from "react-router-dom";
import { useAuth } from "../AuthProvider";

export const Home = () => {
  const { currentUser } = useAuth()
  console.log('currentuser', currentUser)
  return (
    <div className="bg-info ">

      Home
      if parse error 209 logou
    </div>
  );
};