import React, { useState } from "react";
import { Parse } from "parse"

import { useAuth } from '../../AuthProvider';
import { useParams } from 'react-router-dom'

import { useParseQuery } from "@parse/react";
import { Link} from "react-router-dom";
import { DivRow } from "../utilities/Div";
import { CourseShow } from "./CourseShow";

export function CourseList() {
  const parseQuery = new Parse.Object("Course");
  const { results } = useParseQuery(parseQuery, {
    enableLocalDatastore: true,
    enableLiveQuery: true,
  })
  const [currentCourse, setCurrentCourse] = useState()
  return (
    <div className="">
      <div>
        {results && results.map((object, index) => {
          localStorage && localStorage.setItem(object.id, JSON.stringify(object))

          return (
            <DivRow key={index}>
              <button type="button" class="link" onClick={() => setCurrentCourse(object.id)}>
               aaaaaa {object.attributes?.courseTitle || 'test'}
                </button>  
              {/* <Link to={`/courses/${object.id}`}>
                </Link> */}
            </DivRow>
          )
        })}
      </div>
      <div >
        {/* <CourseShow currentCourse={currentCourse} /> */}
      </div>

    </div>
  );
}
