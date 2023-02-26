import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { DivCol, DivRow } from '../utilities/Div';
import VideoPlayer from './video/VideoPlayer'
import InstructionShow from './instruction/InstructionShow';
import { QuestionShow } from './quiz/QuestionShow';
export const CourseShow = () => {
  const {courseId} = useParams()
  const [localStorageItem] = useState(JSON.parse(localStorage.getItem(courseId)))
  console.log('localStorageItem: ', localStorageItem);
  
  return ( 
    <DivCol>
      <DivRow>
      {/* {JSON.stringify(localStorageItem.instructions, null , '\t')}  */}

      </DivRow>
  
        {/* <InstructionShow instructions={localStorageItem.instructions} /> */}
        <QuestionShow questions={localStorageItem.questions} />
        {/* <VideoPlayer options={localStorageItem.video} courseid={courseId} /> */}
    
    </DivCol>
  );
}
 