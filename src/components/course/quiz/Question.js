import React, { useCallback } from "react";
import { DivRow, DivCol } from "../../utilities/Div";
import { useFieldArray } from "react-hook-form";
import { H3} from "../../utilities/Headline"
import { Answer } from "./Answer"



export const Question = ({ register, control, handleSubmit, reset, trigger, setError, defaultValues, getValues, setValue, errors, questionIndex, remove }) => {
  const fieldName = `questions.${questionIndex}`;

  const {
    remove: removeAnswer,
    append: appendAnswer,
    fields: answers
  } = useFieldArray({
    control,
    name: `${fieldName}.answers`
  });

  const handleDelete = useCallback(() => remove(questionIndex), [
    questionIndex,
    remove
  ]);
  console.log('questionIndex', questionIndex)
  return (
    <fieldset>
      <H3>Frage {questionIndex}</H3>
      <div className="flex" >
          <input className="input " register={`${fieldName}.questionId`} label='questionId'  defaultValue={`q${questionIndex}`} hidden />
          <input className="input w-full max-w-xs" register={`${fieldName}.question`} label='Frage' placeholder='question' />
          <input className="input " register={`${fieldName}.correctAnswer`} label='correctAnswer' placeholder='correctAnswer' />
      </div>
      <DivRow>
          <input className="input w-full max-w-xs" register={`${fieldName}.image`} label='Image' placeholder='Bild' />
          <button className="btn" onClick={handleDelete}>delete</button>
      </DivRow>
      <DivRow>
        <DivCol>
          {answers.map((answer, answerIndex) => (
            <Answer
              key={answer.id}
              answerIndex={answerIndex}
              questionIndex={questionIndex}
              answer={answer}
              {...{register, control, handleSubmit, reset, trigger, setError, defaultValues, getValues, setValue, errors}}
              remove={removeAnswer}
            />
          ))}
          <button className="btn" label="add answer" onClick={() => appendAnswer({})} />
        </DivCol>
      </DivRow>
    </fieldset>
  );
};
