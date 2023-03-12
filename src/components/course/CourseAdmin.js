import React from "react";
import { Parse } from "parse"
import { useParseQuery } from "@parse/react";
import { Link } from "react-router-dom";

export function CourseAdmin() {
  const parseQuery = new Parse.Object("Course");
  const { results } = useParseQuery(parseQuery, {
    enableLocalDatastore: true,
    enableLiveQuery: true,
  })
  
  return (
      <div>
        {results && results.map((object, index) => {
          return (
            <div key={index}>
              <Link to={`/admin/courses/${object.id}`}>
                {object.attributes?.courseTitle || 'default title'}
              </Link>
            </div>
          )
        })}
      </div>
     
  );
}
