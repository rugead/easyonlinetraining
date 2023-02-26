import Parse from "parse";

export const updateDepartment = async function (objectId, departmentValue) {
  // Create a new Todo parse object instance and set todo id
  let Department = new Parse.Object('Department');
  Department.set('objectId', objectId);
  // Set new done value and save Parse Object changes
  Department.set('departmentName', departmentValue)
  try {
    await Department.save();
    // Success
    alert('Success! Department updated!');
    // Refresh to-dos list
    // readTodos();
    return true;
  } catch (error) {
    // Error can be caused by lack of Internet connection
    alert(`Error! ${error.message}`);
    return false;
  };
};