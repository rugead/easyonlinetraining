import React from "react";

// import {jsonCourseTemplate} from '../../data/jsonCourseTemplate'
export const Menu = ({results, object, setObject}) => {
 
  console.log('object: ', object)
 
  return (
    
      <ul className="menu w-56">
        {results && results.map((object, index) => {
          return (
            <li key={index}>
              <button  onClick={() => setObject(object)}> {object.attributes?.courseTitle} </button>
            </li>
          )
        })}
      </ul>

        
  );
}
