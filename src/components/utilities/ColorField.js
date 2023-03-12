import React from "react";

export const ColorField = ({ register, label, name, defaultValue, placeholder, xxx }) => {
  console.log('xxx: ', xxx);
  return (
    <div className="">
    <label htmlFor="displayName" className="flex-1">
      <span className="">{label}</span>
    </label>
    <input
      type="text"
      className="p-2 bg-gray-50 w-full text-black border border-gray-300 rounded-md"
    />
    </div>
  );
};
