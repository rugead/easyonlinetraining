import React from "react";

export const SelectField = (props) => {
  const { value, onChange, dataArr } = props;

  return (
    <select
      value={value}
      onChange={onChange}
      className="p-1 bg-gray-100 w-20 text-gray-800 rounded-md"
    >
      {dataArr.map((item, index) => {
        return (
          <option key={index} value={item}>
            {item}
          </option>
        );
      })}
    </select>
  );
};
