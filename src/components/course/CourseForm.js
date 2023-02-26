import React, {useEffect, useState } from "react";
import Parse from "parse";
import { useFieldArray, useForm } from "react-hook-form";
import { Tab } from '@headlessui/react'
import { Instruction } from "./instruction/Instruction";
import { VideoAddEdit } from "./video/VideoAddEdit";
import { Question} from "./quiz/Question"

export const CourseForm = ({course, objectId}) => {
  const { register, control, handleSubmit, reset } = useForm({mode: 'onchange'}); 
  const [courseShow, setCourseShow] = useState({course})


  const onSubmit = async (values) => {
    const courseValues = values
    let Course = new Parse.Object('Course')
    
    if (objectId && course)  {
      console.log('update', JSON.stringify(values, null, 2));
      Course.set('objectId', objectId) 
    }
    
    Course.set('courseTemplate', 'video')
    Course.set('courseTitle', courseValues.courseTitle)
    Course.set('courseImage', courseValues.courseImage)
    Course.set('departments', courseValues.departments)
    Course.set('instructions', courseValues.instructions)
    Course.set('video', courseValues.video)
    Course.set('questions', courseValues.questions)

    try {
      await Course.save();
      setCourseShow(courseValues)
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
    reset(course)
  }, [reset, course])
  
  // console.log('course', courseShow?.instructions?.[0]?.title)
  
  return (
    <div className="">
      <div className="prose">
        <h2>{course?.courseTitle}</h2>
      </div>

    <form>
      <Tab.Group>
        <Tab.List className="flex justify-between rounded-xl bg-secondary text-secondary-content p-5 ">
          <Tab className="">Kursdaten</Tab>
          <Tab className="" >Instruction</Tab>
          <Tab className="">Question</Tab>
          <Tab className=""> Video</Tab>
        </Tab.List>
        
        <Tab.Panels>
          <Tab.Panel>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Course title</span>
              </label>
              <input {...register(`courseTitle`)} className="input input-sm input-bordered w-full max-w-xs" placeholder={`course title`} />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Course Image</span>
              </label>
              <input {...register(`courseImage`)} className="input input-sm input-bordered w-full max-w-xs"  placeholder={`https://Link.to.course.image`} />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Wähle eine Abteilung</span>
              </label>
              <select  {...register(`department`)}  className="select select-sm select-bordered max-w-xs">
                <option value="Verkauf">Verkauf</option>
                <option value="Lager">Lager</option>
              </select>
            </div>
          </Tab.Panel>
    
          <Tab.Panel>
            {instructions.map((item, index) => {
              return (
                <Instruction
                {...{ control, register }}
                key={item.id}
                instruction={item}
                instructionIndex={index}
                remove={removeInstruction}
                />
                );
              })}
            <button className="btn" onClick={() => appendInstruction({ instructionBlocks: [] })}> Add Instruction</button>
          </Tab.Panel>
          
          <Tab.Panel>
            {questions.map((item, index) => {
              // console.log('item', index, item.questionId, item.question)
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
            <button className="btn" onClick={() => appendQuestion({ answers: [] })} >Add Question</button>  
          </Tab.Panel>

          <Tab.Panel>
            <VideoAddEdit 
              {...{ control, register }}
              /> 
            </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
      <div className="py-3 w-full flex justify-end">
          {/* <Button label="reset" onClick={onReset} /> */}
          <button className="btn" onClick={handleSubmit(onSubmit)}>save</button>
      </div>
    </form>  
    <div>
      <div className="prose">
        <h2>
          {courseShow && courseShow.courseTitle}
        </h2>
      </div>

      {courseShow.instructions && courseShow.instructions.map((item, index) => (
        <div>
          <div className="flex w-full" key={index} style={{backgroundColor: `${item.color}`, border: `10px solid ${item.color}`}}>
            
            {item.image ? <img className="h-32 w-32" src={item.image} alt={''} /> : '' }
            <div className="prose w-full max-w-none text-white text-center">
              <h3 className="text-white text-4xl">{item.title}</h3> 
              <h4 className="text-white">{item.subTitle}</h4>
            </div>
          </div>

          <div>
            {item.instructionBlocks.map(x => (
              <div className="w-full" key={index} style={{ border: `10px solid ${item.color}`}}>
                {x.text} 
              </div>
            ))}
          </div>
        </div>
      ))}
      
    </div>
  </div>
  );
};
