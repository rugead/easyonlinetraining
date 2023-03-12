import React, { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { CourseForm } from './CourseForm';
import Parse from "parse";

import {jsonCourseTemplate} from '../data/jsonCourseTemplate'

export const CourseAddEdit = () => {
  // const [course, setCourse] = useState()
  const {objectId} = useParams()
  const location = useLocation()
  const courseObject = location.state
    
  console.log('courseId: ', objectId);
  console.log("courseObject:", courseObject)
  // useEffect(() => {
  //   if (courseId) {
  //     const getCourse = async function() {
  //       const parseQuery = new Parse.Query('Course')
  //       const currentCourse = await parseQuery.get(courseId )
  //       setCourse(currentCourse.attributes)
  //     }
  //     getCourse()
  //   } else {
  //     setCourse(jsonCourseTemplate)
  //   }      
  // }, [courseId])
  
  
  return ( 
    <div className="pb-1"  > 
     
     <CourseForm course={courseObject} objectId={objectId} />
      
    </div>
  );
}
 