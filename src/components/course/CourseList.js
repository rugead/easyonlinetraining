import React, { useState } from "react";
import { useAuth } from '../../AuthProvider';
import { useParams } from 'react-router-dom'
import { CourseShow } from "./CourseShow";

export function CourseList() {
  const { allCourses } = useAuth();
  // const { objectId } = useParams()
  
  // console.log('allCourses: ', allCourses);
  const [currentCourse, setCurrentCourse] = useState()
  // console.log('currentCourse: ', currentCourse);
  return (
    <div className="">
      <div>
        {allCourses && allCourses.map((object, index) => {
          // localStorage && localStorage.setItem(object.id, JSON.stringify(object))

          return (
            <div key={index}>
              <button type="button" className="link" onClick={() => setCurrentCourse(object)}>
                {object.attributes?.courseTitle || 'test'}
              </button>  
            </div>
          )
        })}
      </div>
      <div >
        <CourseShow  currentCourse={currentCourse} />
      </div>

    </div>
  );
}
