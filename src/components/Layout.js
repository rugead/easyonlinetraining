import React from 'react';
import { Navbar } from './Navbar';

export const Layout = ({children}) => {
  return ( 
    <div className="flex flex-col min-h-screen w-full">
      <Navbar />
      <div className='flex p-4'>
        {children}  
      </div>
    </div>
   );
}