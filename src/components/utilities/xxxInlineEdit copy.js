import React, {useState} from 'react';


export const InlineEdit= (props) => {
  const { type, value, id, setValue, ariaLabel } = props
  const [editingValue, setEditingValue] = useState(value);
  
  const onChange = (event) => setEditingValue(event.target.value);
  const onKeyDown = (event) => {
    if (event.key === "Enter" || event.key === "Escape") {
      event.target.blur();
    }
  }
  const onBlur = (event) => {
    if (event.target.value.trim() === "") {
      setEditingValue(value);
    } else {
      setValue(id, event.target.value)
    }
  }

  return (
    <>

        <div className="p-2">
          <input 
              type={type}
              aria-label={ariaLabel}
              value={editingValue}
              onChange={onChange}
              onKeyDown={onKeyDown}
              onBlur={onBlur}
              className="p-2 bg-transparent hover:bg-gray-100 w-full text-black border border-gray-300 rounded-md"
              id={id}
          />
      </div>
    </> 
  );
}
 
// export InputField;