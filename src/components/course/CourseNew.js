import React, { useId, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CourseForm } from './CourseForm';
import Parse from "parse";

import {jsonCourseTemplate} from '../data/jsonCourseTemplate'

export const CourseNew = () => {
  const [course, setCourse] = useState()
  const {courseId} = useParams()
  
  useEffect(() => {
    if (courseId) {
      const getCourse = async function() {
        const parseQuery = new Parse.Query('Course')
        const currentCourse = await parseQuery.get(courseId )
        setCourse(currentCourse.attributes)
      }
      getCourse()
    } else {
      setCourse(jsonCourseTemplate)
    }      
  }, [courseId])
  
  
  return ( 
    <div className="pb-1"  > 
    <h2>new course</h2>
     <CourseForm  />
      
    </div>
  );
}
 