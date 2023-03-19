import React, { useState } from "react";
import { Parse } from "parse"
import { useParseQuery } from "@parse/react";
export function GetAllCourses() {
  const parseQuery = new Parse.Object("Course");
  const {
    results, // Stores the current results in an array of Parse Objects
    error, // Stores any error
  } = useParseQuery(
    parseQuery, // The Parse Query to be used
    {
      enabled: true, // Enables the parse query (default: true)
      enableLocalDatastore: true, // Enables cache in local datastore (default: true)
      enableLiveQuery: true // Enables live query for real-time update (default: true)
    }
  );
  console.log('results: ', results);

  return results;
}
