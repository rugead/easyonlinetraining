import React, {useState} from 'react';
import Parse from "parse";

const updateObject = async function (objectClass, objectId, objectName, objectValue) {
  let Department = new Parse.Object(objectClass);
  Department.set('objectId', objectId);
  Department.set(objectName, objectValue)
  try {
    await Department.save();
    // Success
    alert('Success! Updated!');
  
    return true;
  } catch (error) {
    // Error can be caused by lack of Internet connection
    alert(`Error! ${error.message}`);
    return false;
  };
};

export const InlineEdit= (props) => {
  const { ariaLabel, objectClass, objectId, objectName, objectValue } = props
  const [editingValue, setEditingValue] = useState(objectValue);
  
  const onChange = (event) => setEditingValue(event.target.value);
  const onKeyDown = (event) => {
    if (event.key === "Enter" || event.key === "Escape") {
      event.target.blur();
    }
  }
  const onBlur = (event) => {
    if (event.target.value.trim() === "") {
      setEditingValue(objectValue);
    } else {
      updateObject( objectClass, objectId, objectName, event.target.value)
    }
  }

  return (
    <div className="">
      <input 
        type='text'
        aria-label={ariaLabel}
        value={editingValue}
        onChange={onChange}
        onKeyDown={onKeyDown}
        onBlur={onBlur}
        className="p-2 bg-transparent hover:bg-gray-50 hover:text-gray-500 w-full text-black border border-gray-300 rounded-md"
      />
    </div>
  );
}