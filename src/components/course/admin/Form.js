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
  const { objectId } = useParams()
  const [ course, setCourse ] = useState(allCourses.filter(item => item.id === objectId)[0].attributes)
  const { register, control, handleSubmit, reset } = useForm({
    defaultValues: course
  }); 
  
  // console.log('objectId: ', objectId);
  // console.log('results: ', allCourses);
  // console.log('course: ', course);
  
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
    console.log('Course: ', Course.attributes);
    try {
      setCourse(Course.attributes)
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
    setCourse(allCourses.filter(item => item.id === objectId)[0].attributes)
  }, [objectId, allCourses])

  return (
    <form>
      <div className="flex py-4">
        <h1 className="font-bold text-xl" >Kurs: {course?.courseTitle}</h1>
      </div>
      <Tab.Group>
      <Tab.List className="tabs flex justify-around items-stretch py-4">
        <Tab className="tab tab-bordered flex-1">  Kursdaten</Tab>
        <Tab className="tab tab-bordered flex-1">  Instruction</Tab>
        <Tab className="tab tab-bordered flex-1">  Question & Answers  </Tab>
        <Tab className="tab tab-bordered flex-1">  Video  </Tab>
      </Tab.List>
      <Tab.Panels>
    
        <Tab.Panel className="">
          <div className={`border-2 rounded-xl shadow-xl`}> 
            <h1 className="font-bold bg-base-200 text-xl p-4" >Kursname</h1>
            <div className="flex gap-4 justify-between p-4">
              <input placeholder="Course Title" className={`input input-bordered w-full`} {...register(`courseTitle`)} type="text" />
              <input placeholder="Image http://domain.de/image.jpg"className={`input input-bordered w-full`} {...register(`courseImage`)} type="text" />     
              <select {...register("department")} className="select select-bordered">
                <option key='0' value="" disabled>select</option>    
                <option key='1' value="Verkauf">Verkauf</option>    
                <option key='2' value="Produktion">Produktion</option>    
              </select>
            </div>
          </div>
        </Tab.Panel>
    
        <Tab.Panel>
          <div className="flex flex-col">
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

    <div className="divider"></div>
    <div className="py-4 rounded-xl">
      <div className="flex">
        {/* <img className="w-full h-72 rounded-xl" src={course.courseImage} alt={course.courseTitle} />  */}
       <h1 className="text-6xl font-bold p-4"> {course.courseTitle}</h1>
      </div>
       {course?.instructions.map((i, index) => {
          let color = i.color
          return (
            <div key={index} className={`flex flex-col p-4 rounded-xl gap-4   bg-${color}`}>
              <div className={`flex rounded-xl gap-4` }>
                <img className="w-48 h-24 rounded-xl" src={i.image} alt={i.instruction} />
                <h3 className="text-xl font-bold">{i.instruction}</h3>
              </div>
              <div className="flex flex-col gap-4 rounded-xl">
                {i && i.instructionBlocks.map((ib, index) => {
                  return (
                    <div key={index} className="bg-base-100 rounded-xl py-8" >  
                      <div className={`flex p-4 rounded-xl gap-4` }>
                        <img className="w-24 h-24 rounded-xl" src={ib.image} alt={ib.text} />
                        <div className="">
                          <div className="h-24">
                            {ib.text}
                          </div>
                          
                          {ib && ib?.instructionBlockItems.map((ibi, index) => {
                            return (
                              <div key={index} >  
                                  <p className="">- {ibi.text}</p>
                              </div>
                            )
                          })}
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
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
