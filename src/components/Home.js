import React from "react";
// import { Outlet } from "react-router-dom";
import { useAuth } from "../AuthProvider";

export const Home = () => {
  const { currentUser } = useAuth()
  console.log('currentuser', currentUser)
  return (
    <article className="prose">
      <h2>Home</h2>
      <p>
        if parse error 209 logou  
      </p>
    </article>
  );
};