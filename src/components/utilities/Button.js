import React from 'react';

export const Button = (props) => {
  const { name, onClick, label, type } = props
  return ( 
    <button 
      className="btn btn-primary" 
      type={type || "button"}
      name={name} 
      onClick={onClick} 
    >
      {label}
    </button>
  );
}

export const PrevButton = (props) => {  
  return(
    <div
      className="btn btn-primary" 
      onClick={()=> props.action()}
    >
      <svg xmlns="htt
      p://www.w3.org/2000/svg" className="h-6 w-6 justify-center align-self-center" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z" />
      </svg>
    </div>
)}

export const NextButton = (props) => {  
  return(
    <div
      className="btn btn-primary" 
      onClick={()=> props.action()}
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6  justify-center align-self-center" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    </div>
)}