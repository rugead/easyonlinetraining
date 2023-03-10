import React from "react";

export const TextField = ({ register, label, name, defaultValue, placeholder }) => {
  return (
    <div className="">
    <label htmlFor="displayName" className="flex-1">
      <span className="">{label}</span>
    </label>
    <input
      type="text"
      className="p-2 bg-gray-50 w-full text-black border border-gray-300 rounded-md"
      {...register(name)}
      defaultValue={defaultValue}
      placeholder={placeholder}
    />
    </div>
  );
};
