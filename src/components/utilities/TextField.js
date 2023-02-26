import React from "react";

export const TextField = ({ register, label, name, defaultValue, placeholder}) => {
  return (
    <div className="">
    <label htmlFor="displayName" className="label">
      <span className="label-text">{label}</span>
    </label>
    <input
      type="text"
      className="input input-md input-bordered w-full "
      {...register(name)}
      defaultValue={defaultValue}
      placeholder={placeholder}
    />
    </div>
  );
};
