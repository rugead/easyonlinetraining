import React, { useCallback } from "react";
import { Button } from "../../utilities/Button";
import { DivRow, DivCol } from "../../utilities/Div";
import { TextField } from "../../utilities/TextField";
import { H3} from "../../utilities/Headline"
import { InstructionBlockItem } from "./InstructionBlockItem";
import { useFieldArray } from "react-hook-form";

export const InstructionBlock = ({ register, control, handleSubmit, reset, trigger, setError, defaultValues, getValues, setValue, errors, instructionIndex, instructionBlockIndex, instructionBlock, remove  }) => {
  
  const fieldName = `instructions.${instructionIndex}.instructionBlocks.${instructionBlockIndex}`;
  
  const {
    remove: removeInstructionBlockItem,
    append: appendInstructionBlockItem,
    fields: instructionBlockItems
  } = useFieldArray({
    control,
    name: `${fieldName}.instructionBlockItems`
  });

  const handleDelete = useCallback(() => remove(instructionBlockIndex), [
    instructionBlockIndex,
    remove
  ]);

  return (
    <>
      <H3>Anweisungsblock {instructionBlockIndex}</H3>
      <DivRow>
        <DivCol>
          <TextField 
            label="Bild" 
            register={register} 
            name={`${fieldName}.image`} 
            placeholder='Bild'
            />

          <TextField
            label="text"
            register={register}
            name={`${fieldName}.text`}
            placeholder='Anweisungtext'
            />
        </DivCol>
        <DivCol>
          <Button label="delete" onClick={handleDelete} />
        </DivCol>
      </DivRow>
      <DivRow>
        <DivCol>
          {instructionBlockItems.map((item, index) => (
            <InstructionBlockItem 
              key={item.id}
              instructionBlockItemIndex={index}
              instructionBlockIndex={instructionBlockIndex}
              instructionBlockItem={item}
              instructionIndex={instructionIndex}
              remove={removeInstructionBlockItem}
              {...{register, control, handleSubmit, reset, trigger, setError, defaultValues, getValues, setValue, errors}}

              />
          ))}
          <Button label="add instructionblockitem" onClick={() => appendInstructionBlockItem({})} />
        </DivCol>
      </DivRow>
    </>
  );
};



