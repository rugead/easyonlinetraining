import React, {useEffect, useState } from "react";
import Parse from "parse";
// import { useParseQuery } from "@parse/react";
import { useFieldArray, useForm } from "react-hook-form";
import { Tab } from '@headlessui/react'
import { DivRow } from "../../utilities/Div";
import { Button } from "../../utilities/Button";
import { TextField } from "../../utilities/TextField";
import { Instruction } from "../instruction/Instruction";
import { VideoAddEdit } from "../video/VideoAddEdit";
import { Question} from "../quiz/Question"
import { H1, H2, H3 } from "../../utilities/Headline";
// import { jsonCourseTemplate } from '../../data/jsonCourseTemplate'

export const CourseForm = ({course, objectId}) => {
  // const [departmentsArray, setDepartmentsArray] = useState(['select'])
  const { register, control, handleSubmit, reset } = useForm(
    // {defaultValues: {jsonCourseTemplate}}
  ); 
    
  // function Select({  name, ...rest }) {
  //   return (
  //     <select 
  //       className="p-2 bg-gray-50 w-full text-black border border-gray-300 rounded-md"
  //       {...register(name)} 
  //       {...rest}
  //     >
  //       {departmentsArray.map(value => (
  //         <option key={value} value={value}>
  //           {value}
  //         </option>
  //       ))}
  //     </select>
  //   );
  // }

  const onSubmit = async (values) => {
    const courseValues = values
    let Course = new Parse.Object('Course')
    
    if (objectId && course)  {
      // console.log('update', JSON.stringify(values, null, 2));
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
  
  // const {append: appendDepartment, remove: removeDepartment, fields: departments} = useFieldArray({
  //   control,
  //   name: "departments"
  // })
  
  useEffect(() => {
    // async function getDepartments() {
    //   const query = new Parse.Query("Department");
    //   try {
    //     const arr = await query.find();
    //     const departmentArr = arr.map((item) => (
    //       item.attributes.departmentName
    //     ))
    //     setDepartmentsArray(departmentArr)
    //     return true
    //   } catch (error) {
    //     alert(`Failed to retrieve the object, with error code: ${error.message}`);
    //     return false
    //   }
    // }
    // getDepartments()

    if (objectId && course) {
      console.log('str 1: ', JSON.stringify(course, null , '\t'))
      reset(course)
    }
    if (!objectId && course) {
      console.log('str 2: ', JSON.stringify(course, null , '\t'))
      reset(course)
    }
  }, [reset, course, objectId])

  return (
    <form>
      {/* <Button label={edit ? 'edit eq true' : 'add eq false'} onClick={() => setEdit((edit) => !edit)} />   */}
      <Tab.Group>
      <Tab.List className="flex justify-between bg-blue-100 p- w-full">

        <Tab>Kursdaten</Tab>
        <Tab>Instruction</Tab>
        <Tab>Question & Answers</Tab>
        <Tab>Video</Tab>
      </Tab.List>
      <Tab.Panels>
    
        <Tab.Panel>
          {/* <DivRow>
            <TextField register={register} name={`courseTemplate`} label={`courseTemplate`} placeholder={`courseTemplate`} />
          </DivRow> */}
          <DivRow>
            <TextField register={register} name={`courseTitle`} label={`courseTitle`} placeholder={`courseTitle`} />
          </DivRow>
          <DivRow>
            <TextField register={register} name={`courseImage`} label={`courseImage`} placeholder={`courseImage`} />
          </DivRow>
          {/* {departments.map((item, index) => {    
            return (
            <DivRow key={item.id}>
              <Select  name={`departments.${index}`} />
              <Button label="delete" onClick={() => removeDepartment(index)} />
            </DivRow>
            )} 
            )
          } */}


          <select {...register("department")}>
            <option key='0' value="">select</option>    
            <option key='1' value="Verkauf">Verkauf</option>    
            <option key='2' value="Produktion">Produktion</option>    
          </select>

          {/* <Button label="Add department" onClick={() => appendDepartment()} /> */}
        </Tab.Panel>
    
        <Tab.Panel>
          <div className="flex flex-col p-5 gap-5">

          {instructions.map((item, index) => {
            console.log('item: ', item.color);
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
          <Button label="Add Instruction" onClick={() => appendInstruction({ instructionBlocks: [] })} />
              </div>
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
        <Button label="submit" onClick={handleSubmit(onSubmit)} type="submit" />
    </DivRow>

    <div>
      <div> 
        {course.courseTitle}
      </div>
       {course?.instructions.map(i => {
          let color = i.color
          return (
            <div className={`flex p-10 bg-${color}`}>
              <img className="w-16 h-16" src={i.image} alt={i.instruction} />
              <h3 className="p-5 text-4xl font-bold">{i.instruction}</h3>
            </div>
          )
       })}
    </div>

    <DivRow>
      <pre id="json">    
        {JSON.stringify(course, null , '\t')} 
      </pre>
    </DivRow>
  </form>  
  );
};
