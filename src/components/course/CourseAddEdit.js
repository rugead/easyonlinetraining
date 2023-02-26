import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CourseForm } from './CourseForm';
import Parse from "parse";

import {jsonCourseTemplate} from '../data/jsonCourseTemplate'

export const CourseAddEdit = () => {
  const [course, setCourse] = useState()
  const {objectId} = useParams()
  console.log('objectId: ', objectId);
  
  useEffect(() => {
    if (objectId) {
      const getCourse = async function() {
        const parseQuery = new Parse.Query('Course')
        const currentCourse = await parseQuery.get(objectId )
        setCourse(currentCourse.attributes)
      }
      getCourse()
    } else {
      setCourse(jsonCourseTemplate)
    }      
  }, [objectId])
  
  
  return ( 
    <div className="pb-1"  > 
     <CourseForm course={course} objectId={objectId} />
      
    </div>
  );
}
 