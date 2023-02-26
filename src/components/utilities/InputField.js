import React from 'react';

export const InputField = (props) => {
  const { label, type, name, value, id, placeholder, onChange} = props
  return (
    <div className="">
          <label htmlFor="displayName" className="flex-1">
            <span className="">{label}</span>
          </label>
          <input 
            type={type}
            className="p-2 bg-gray-50 w-full text-black border border-gray-300 rounded-md"
            name={name}
            value={value}
            id={id}
            placeholder={placeholder}
            onChange={onChange} 
          />
      </div>
  )
}
 
// export InputField;