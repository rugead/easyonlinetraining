import React from "react";

export const SelectField = (props) => {
  const { value, onChange, dataArr } = props;

  return (
    <select
      value={value}
      onChange={onChange}
      className="select select-ghost select-bordered"
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
