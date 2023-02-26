import React from 'react';

export const Layout = ({children}) => {
  return ( 
    <div className="container p-5 mx-auto min-h-screen">
        {children}
    </div>
   );
}