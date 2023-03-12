import React from 'react';

export const H1 = ({children}) => {
  return ( 
    <div className='prose'>
   <h1 className="">
      {children}
    </h1>
    </div>
   );
}

export const H2 = ({children}) => {
  return ( 
    <div className='prose'>
      <h2 className="">
        {children}
      </h2>
    </div>
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