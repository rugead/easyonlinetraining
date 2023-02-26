import React from "react";
import { DivRow } from "./Div";

export const Checkbox = ({ register, label, name, defaultValue, placeholder}) => {
  return (
    <DivRow>

    <label
      htmlFor="displayName" 
      className="p-2">
    <span className="">{label}</span>
    </label>
    <input 
      type="checkbox" 
      className="p-2"
      // {...register(name)}
      {...register(name, {})} 
      defaultValue={defaultValue}
      />
      </DivRow>
  );
};
