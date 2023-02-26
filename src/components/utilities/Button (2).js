import React from "react";

export const Button = ({ children, ...rest }) => (
  <button
    type="button"
    className="p-2 text-primary hover:text-gray-200 hover:bg-primary border border-primary rounded-md" 
    {...rest}
  >
    {children}
  </button>
);
