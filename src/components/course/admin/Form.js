import React, {useEffect, useState } from "react";
import Parse from "parse";
import { useAuth } from '../../../AuthProvider';
import { useParams } from 'react-router-dom'
import { useFieldArray, useForm } from "react-hook-form";
import { Tab } from '@headlessui/react'
import { Button } from "../../utilities/Button";
import { Instruction } from "../instruction/Instruction";
import { VideoAddEdit } from "../video/VideoAddEdit";
import { Question} from "../quiz/Question"

export const CourseForm = () => {
  const { allCourses } = useAuth();
  const {objectId} = useParams()
  const course = allCourses.filter(item => item.id === objectId)[0].attributes
  const { register, control, handleSubmit, reset } = useForm({
    defaultValues: allCourses.filter(item => item.id === objectId)[0].attributes
  }); 
  
  console.log('objectId: ', objectId);
  console.log('results: ', allCourses);
  console.log('course: ', course);
  
  const onSubmit = async (values) => {
    const courseValues = values
    let Course = new Parse.Object('Course')
    
    if (objectId && course)  {
      Course.set('objectId', objectId) 
}
    Course.set('courseTemplate', 'video')
    Course.set('courseTitle', courseValues.courseTitle)
    Course.set('courseImage', courseValues.courseImage)
    Course.set('department', courseValues.department)
    Course.set('instructions', courseValues.instructions)
    Course.set('video', courseValues.video)
    Course.set('questions', courseValues.questions)
    try {
      await Course.save();
      alert('success. Course saved')
      
      return true
    } catch (error) {
      alert(`error: ${error}`)
      
      return false
    }
  };
  
  const { append: appendInstruction, remove: removeInstruction, fields: instructions } = useFieldArray({
    control: control,
    name: "instructions"
  });
  
  const { append : appendQuestion, remove: removeQuestion, fields: questions } = useFieldArray({
    control: control,
    name: "questions"
  });
  
  useEffect(() => {
    if (objectId && course) {
      // console.log('str 1: ', JSON.stringify(course, null , '\t'))
      reset(course)
    }
    // if (!objectId && course) {
    //   // console.log('str 2: ', JSON.stringify(course, null , '\t'))
    //   reset(course)
    // }
  }, [objectId])

  return (
    <form>
      <Tab.Group>
      <Tab.List className="flex justify-between bg-blue-100 p- w-full">
        <Tab>Kursdaten</Tab>
        <Tab>Instruction</Tab>
        <Tab>Question & Answers</Tab>
        <Tab>Video</Tab>
      </Tab.List>
      <Tab.Panels>
    
        <Tab.Panel>
          <div className="flex gap-4 px-4">
            <input placeholder="Course Title" className={`input input-bordered w-full`} {...register(`courseTitle`)} type="text" />
            <input placeholder="Image http://domain.de/image.jpg"className={`input input-bordered w-full`} {...register(`courseImage`)} type="text" />     
            <select {...register("department")} className="select select-bordered">
              <option key='0' value="" disabled>select</option>    
              <option key='1' value="Verkauf">Verkauf</option>    
              <option key='2' value="Produktion">Produktion</option>    
            </select>
          </div>
        </Tab.Panel>
    
        <Tab.Panel>
          <div className="flex flex-col p-3">
            {instructions.map((item, index) => {
              return (
                <Instruction
                  {...{ control, register }}
                  key={item.id}
                  instruction={item}
                  instructionIndex={index}
                  onChange={'onChange'}
                  remove={removeInstruction}
                />
              );
            })}
          </div>
          <div className="p-4">
            <button className="btn" type="button" onClick={() => appendInstruction({ instructionBlocks: [] })} >Add Instruction</button>
          </div>
        </Tab.Panel>
          
        <Tab.Panel>
          {questions.map((item, index) => {
            return (
              <Question
                {...{ control, register }}
                  key={item.id}
                  question={item}
                  questionIndex={index}
                  remove={removeQuestion}
              />
            );
          })}  
          <Button label="Add Question" onClick={() => appendQuestion({ answers: [] })} />  
        </Tab.Panel>
        <Tab.Panel>
          <VideoAddEdit 
            {...{ control, register }}
          /> 
          </Tab.Panel>
      </Tab.Panels>
    </Tab.Group>

    <div className="toast">
      <div className="alert alert-warning">
        <div>
          <button className="btn hover:btn-warning" type="button" onClick={handleSubmit(onSubmit)} >save</button>
        </div>
      </div>
    </div>


    <div>
      <div> 
        {course.courseTitle}
      </div>
       {course?.instructions.map((i, index) => {
          let color = i.color
          return (
            <div key={index} className={`flex p-10 bg-${color}`}>
              <img className="w-16 h-16" src={i.image} alt={i.instruction} />
              <h3 className="p-5 text-4xl font-bold">{i.instruction}</h3>
            </div>
          )
       })}
    </div>

    <div>
      <pre id="json">    
        {JSON.stringify(course, null , '\t')} 
      </pre>
    </div>
  </form>  
  );
};
