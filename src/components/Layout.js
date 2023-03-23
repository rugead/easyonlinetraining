import React from 'react';
import { Navbar } from './Navbar';

export const Layout = ({children}) => {
  return ( 
    <div className="flex flex-col min-h-screen w-full">
      <Navbar />
      <div className='p-4 container mx-auto'>
        {children}  
      </div>
    </div>
   );
}