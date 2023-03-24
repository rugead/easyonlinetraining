import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { DivCol, DivRow } from '../utilities/Div';
import VideoPlayer from './video/VideoPlayer'
import InstructionShow from './instruction/InstructionShow';
import { QuestionShow } from './quiz/QuestionShow';

export const CourseShow = (props) => {
  const objectId = props?.currentCourse?.id
  const course = props?.currentCourse?.attributes
  
  console.log('course: ', course);
  console.log('objectId: ', objectId);
  return ( 
    <DivCol>
      <DivRow>
      {/* {JSON.stringify(localStorageItem.instructions, null , '\t')}  */}

      </DivRow>
  
        {/* <InstructionShow instructions={localStorageItem.instructions} /> */}
        { (course && (course.questions.length > 0)) ? <QuestionShow questions={course?.questions} /> : 'keine Fragen hier?'   }
        {/* <VideoPlayer options={localStorageItem.video} courseid={courseId} /> */}
    
    </DivCol>
  );
}
 