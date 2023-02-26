import React, { useCallback } from "react";
import { Button } from "../../utilities/Button";
import { DivRow, DivCol } from "../../utilities/Div";
import { TextField } from "../../utilities/TextField";
import { H3} from "../../utilities/Headline"

export const InstructionBlockItem = ({
  register, control, handleSubmit, reset, trigger, setError, defaultValues, getValues, setValue, errors,
  instructionIndex,
  instructionBlockIndex,
  instructionBlockItemIndex,
  remove
}) => {
  const fieldName = `instructions.${instructionIndex}.instructionBlocks.${instructionBlockIndex}.instructionBlockItems.${instructionBlockItemIndex}`;
  
  console.log('fieldName: ', fieldName);
  const handleDelete = useCallback(() => remove(instructionBlockItemIndex), [
    instructionBlockItemIndex,
    remove
  ]);

  return (
    <>
      <TextField
        label="text"
        register={register}
        name={`${fieldName}.text`}
        placeholder='text'
        // defaultValue='lll'
      />     
      <Button label="delete" onClick={handleDelete} />
    </>
  );
};
