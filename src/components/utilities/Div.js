import React from 'react';

export const DivUl = ({children}) => {
  return ( 
    <div className="flex justify-between p-2">
      {children}
    </div>
   );
}

export const DivLi= ({children}) => {
  return ( 
    <div className="text-base text-gray-700 p-2">
      {children}
    </div>
   );
}


export const DivRow = ({children}) => {
  return ( 
    <div className={`flex justify-between p-2`}>
      {children}
    </div>
   );
}

export const DivCol= ({children}) => {
  return ( 
    <div className="text-base text-gray-700 p-2">
      {children}
    </div>
   );
}