import React, { useCallback } from "react";
import { Button } from "../../utilities/Button";
import { DivRow, DivCol } from "../../utilities/Div";
import { TextField } from "../../utilities/TextField";
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
      <DivRow >
        <DivCol>
          <TextField register={register} name={`${fieldName}.questionId`} label='questionId'  defaultValue={`que${questionIndex}`} />
          <TextField register={register} name={`${fieldName}.question`} label='Frage' placeholder='question' />
          <TextField register={register} name={`${fieldName}.image`} label='Image' placeholder='Bild' />
          <TextField register={register} name={`${fieldName}.correctAnswer`} label='correctAnswer' placeholder='correctAnswer' />
        </DivCol>
        <DivCol>
          <Button label="delete" onClick={handleDelete} />
        </DivCol>
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
          <Button label="add answer" onClick={() => appendAnswer({})} />
        </DivCol>
      </DivRow>
    </fieldset>
  );
};
