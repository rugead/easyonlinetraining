import React, { useCallback } from "react";
import { Button } from "../../utilities/Button";
import { DivRow, DivCol } from "../../utilities/Div";
import { TextField } from "../../utilities/TextField";
import { H3} from "../../utilities/Headline"
export const Answer = ({
  register, control, handleSubmit, reset, trigger, setError, defaultValues, getValues, setValue, errors, 
  questionIndex,
  answerIndex,
  answer,
  remove
}) => {
  const fieldName = `questions.${questionIndex}.answers.${answerIndex}`;
  const handleDelete = useCallback(() => remove(answerIndex), [
    answerIndex,
    remove
  ]);

  return (
    <>
      <H3>Antwort  {answerIndex}</H3>
      <DivRow>
       
        <DivCol>
          <TextField 
            label="Bild" 
            register={register} 
            name={`${fieldName}.image`} 
            placeholder='Bild'
            defaultValue={answer.image}
            />

          <TextField
            label="text"
            register={register}
            name={`${fieldName}.text`}
            placeholder='Antwort'
            defaultValue={answer.text}
            />
        </DivCol>
        <DivCol>
          <Button label="delete" onClick={handleDelete} />
        </DivCol>
      </DivRow>
    </>
  );
};



