import React from "react";
import { Parse } from "parse"
import { useParseQuery } from "@parse/react";
import { Link} from "react-router-dom";
import { DivRow } from "../utilities/Div";

export function CourseList() {
  const parseQuery = new Parse.Object("Course");
  const { results } = useParseQuery(parseQuery, {
    enableLocalDatastore: true,
    enableLiveQuery: true,
  })
  
  return (
    <div className="">
      <div>
        {results && results.map((object, index) => {
          localStorage && localStorage.setItem(object.id, JSON.stringify(object))

          return (
            <DivRow key={index}>
              <Link to={`/courses/${object.id}`}>
                {object.attributes?.courseTitle || 'test'}
                </Link>
            </DivRow>
          )
        })}
      </div>

    </div>
  );
}
