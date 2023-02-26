import React from "react";
import Parse from "parse";
import { useParseQuery } from "@parse/react";

export const GetDepartments = ({ key, register, name, defaultValue }) => {
  const parseQuery = new Parse.Query("Department");
  const { results } = useParseQuery(parseQuery, {
      enableLocalDatastore: true, // Enables cache in local datastore (default: true)
      enableLiveQuery: true, // Enables live query for real-time update (default: true)
    });

  return (
    <select
      className="p-2 bg-gray-50 w-full text-black border border-gray-300 rounded-md"
    >
      {results &&
        results.map((object, index) => {
          return (
            <option key={object.id} value={object.attributes?.departmentName}>
              {object.attributes?.departmentName}
            </option>
          );
        })}
    </select>
  );
};
