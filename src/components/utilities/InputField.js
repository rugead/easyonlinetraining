import React from 'react';

export const InputField = (props) => {
  const { label, type, name, value, id, placeholder, onChange} = props
  return (
    <div className="form-control w-full max-w-xs">
      <label htmlFor="displayName" className="label">
        <span className="label-text">What is your name?</span>
      </label>
          <input 
            type={type}
            className="input input-bordered w-full input-accent max-w-xs"
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
