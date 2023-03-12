import React, {useId, useEffect, useState, useCallback} from "react";
import Parse from "parse";
// import { useParseQuery } from "@parse/react";
import { useFieldArray, useForm } from "react-hook-form";
import { Tab } from '@headlessui/react'
import { DivRow } from "../utilities/Div";
import { Button } from "../utilities/Button";
import { TextField } from "../utilities/TextField";
import { Instruction } from "./instruction/Instruction";
import { VideoAddEdit } from "./video/VideoAddEdit";
import { Question} from "./quiz/Question"

export const CourseForm = ({course, objectId}) => {
  const [departmentsArray, setDepartmentsArray] = useState(['select'])
  const { register, control, handleSubmit, reset, remove} = useForm(); 
    
  function Select({  name, ...rest }) {
    return (
      <select 
        className="p-2 bg-gray-50 w-full text-black border border-gray-300 rounded-md"
        {...register(name)} 
        {...rest}
      >
        {departmentsArray.map(value => (
          <option key={value} value={value}>
            {value}
          </option>
        ))}
      </select>
  );
}
// const onSubmit = (data) => {
//   if (objectId && course)  {
//     console.log('update', JSON.stringify(data, null, 2));
//   }
//   if (!objectId) {
//     console.log('new', JSON.stringify(data, null, 2));
//   }
// };

  const onSubmit = async (values) => {
    const courseValues = values
    let Course = new Parse.Object('Course')
    
    if (objectId && course)  {
      console.log('update', JSON.stringify(values, null, 2));
      Course.set('objectId', objectId) 
    }
    
    Course.set('courseTemplate', courseValues.courseTemplate)
    Course.set('courseTitle', courseValues.courseTitle)
    Course.set('courseImage', courseValues.courseImage)
    Course.set('departments', courseValues.departments)
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
  
  const {append: appendDepartment, remove: removeDepartment, fields: departments} = useFieldArray({
    control,
    name: "departments"
  })
  
  useEffect(() => {
    async function getDepartments() {
      const query = new Parse.Query("Department");
      try {
        const arr = await query.find();
        const departmentArr = arr.map((item) => (
          item.attributes.departmentName
        ))
        setDepartmentsArray(departmentArr)
        return true
      } catch (error) {
        alert(`Failed to retrieve the object, with error code: ${error.message}`);
        return false
      }
    }
    getDepartments()

    if (objectId && course) {
      // console.log('str: ', JSON.stringify(course, null , '\t'))
      reset(course)
    }
    if (!objectId && course) {
      // console.log('str: ', JSON.stringify(course, null , '\t'))
      reset(course)
    }
  }, [reset, course, objectId])

  return (
    <form>
      {/* <Button label={edit ? 'edit eq true' : 'add eq false'} onClick={() => setEdit((edit) => !edit)} />   */}
      <Tab.Group>
      <Tab.List className="flex justify-between bg-blue-100 p-2">

        <Tab>Kursdaten</Tab>
        <Tab>Instruction</Tab>
        <Tab>Question</Tab>
        <Tab>Answers</Tab>
        <Tab>Video</Tab>
      </Tab.List>
      <Tab.Panels>
    
        <Tab.Panel>
      
            
       

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Course title</span>
            </label>
              <input register={`courseTitle`} className="input input-sm input-bordered w-full max-w-xs" placeholder={`course title`} />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Course Image</span>
            </label>
            <input register={`courseImage`} className="input input-sm input-bordered w-full max-w-xs"  placeholder={`https://Link.to.course.image`} />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Wähle eine Vorlage</span>
            </label>
          <select  {...register(`courseTemplate`)} className="select select-sm select-bordered max-w-xs">
              <option value="Video">Video</option>
              <option value="Instructions">Instruction</option>
          </select>
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
          <Button label="Add Instruction" onClick={() => appendInstruction({ instructionBlocks: [] })} />
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
          <Button label="Add Question" onClick={() => appendQuestion({ answers: [] })} />  
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
          <Button label="Add Question" onClick={() => appendQuestion({ answers: [] })} />  
        </Tab.Panel>

        <Tab.Panel>
          <VideoAddEdit 
            {...{ control, register }}
          /> 
          </Tab.Panel>
      </Tab.Panels>
    </Tab.Group>



    <DivRow>
        {/* <Button label="reset" onClick={onReset} /> */}
        <button className="btn" onClick={handleSubmit(onSubmit)} type="submit" >save</button>
    </DivRow>


    <footer className="footer p-2 bg-neutral text-neutral-content">
      <pre id="json">  
        {JSON.stringify(course, null , '\t')} 
      </pre>
    </footer>
  </form>  
  );

};
