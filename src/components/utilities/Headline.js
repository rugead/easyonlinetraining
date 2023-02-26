import React from 'react';

export const H1 = ({children}) => {
  return ( 
    <h1 className="p-2 text-4xl sm:text-5xl md:text-6xl lg:text-8xl xl:text-9xl text-gray-500">
      {children}
    </h1>
   );
}

export const H2 = ({children}) => {
  return ( 
    <h2 className="p-2 text-3xl md:text-3xl lg:text-4xl xl:text-5xl text-gray-500">
      {children}
    </h2>
   );
}

export const H3 = ({children}) => {
  return ( 
    <h1 className="text-2xl text-gray-400 p-2">
      {children}
    </h1>
   );
}

export const H4 = ({children}) => {
  return ( 
    <h4 className="text-l sm:text-xl md:text-2xl text-gray-300 p-2">
      {children}
    </h4>
   );
}