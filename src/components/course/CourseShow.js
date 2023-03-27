import React from 'react';
// import VideoPlayer from './video/VideoPlayer'
import VideoJS from '../course/video/VideoJS'
import { InstructionShow } from './instruction/InstructionShow';
import { QuestionShow } from './quiz/QuestionShow';

export const CourseShow = (props) => {
  const objectId = props?.currentCourse?.id
  const course = props?.currentCourse?.attributes
  
  console.log('course: ', course);
  console.log('objectId: ', objectId);



  return ( 
    <div>
     <div className="flex">
      <h1 className="text-5xl font-bold p-4">{course && course.courseTitle}</h1>
      </div>
      {/* { (course && (course.video)) ?       <VideoJS options={course.video} onReady={handlePlayerReady} /> : 'keine Video hier?'   } */}
      { (course && (course.video)) ?       <VideoJS options={course.video} courseid={objectId} /> : 'keine Video hier?'   }
      { (course && (course.instructions.length > 0)) ? <InstructionShow instructions={course?.instructions} /> : 'keine Fragen hier?'   }
      { (course && (course.questions.length > 0)) ? <QuestionShow questions={course?.questions} /> : 'keine Fragen hier?'   }
    </div>
  );
}
 