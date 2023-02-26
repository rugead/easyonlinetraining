import React from "react";
import { Controller } from "react-hook-form";

const DropDown = React.forwardRef(
  ({ options = [], onChange, value, label }, ref) => {
    const handleChange = (e) => {
      // eslint-disable-next-line
      const option = options.find((p) => p.value == e.target.value);
      onChange(option?.value);
    };

    return (
      <div className="form-group row">
        <label className="col-4 col-form-label">{label}</label>
        <div className="col-8">
          <select
            className="form-control"
            onChange={handleChange}
            value={value}
          >
            {options.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
        </div>
      </div>
    );
  }
);

export const DropDownField = ({ defaultValue, ...rest }) => (
  <Controller as={<DropDown />} defaultValue={defaultValue ?? ""} {...rest} />
);
