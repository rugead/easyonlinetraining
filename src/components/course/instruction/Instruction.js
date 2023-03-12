import React, { useCallback, useState } from "react";
import { Button } from "../../utilities/Button";
import { DivRow, DivCol } from "../../utilities/Div";
import { TextField } from "../../utilities/TextField";
import { useFieldArray } from "react-hook-form";
import { H3} from "../../utilities/Headline"
import { InstructionBlock } from "./InstructionBlock"
import { BgColors, BgColorsInput } from "../../utilities/Colors";
import { ColorField } from "../../utilities/ColorField"
import { InputField } from "../../utilities/InputField";


export const Instruction = ({ register, control, handleSubmit, reset, trigger, setError, defaultValues, getValues, setValue, errors, instructionIndex, remove, instruction }) => {
  const [color, setColor] = useState(instruction?.color)
  console.log('defaultValues?.color: ', instruction);
  
  const fieldName = `instructions.${instructionIndex}`;
  const onClick = (ev) => {
    ev.preventDefault()
    console.log('ev.target.dataset.color: ', ev.target.dataset.color);
    setColor(ev.target.dataset.color)
  }
  const {
    remove: removeInstructionBlock,
    append: appendInstructionBlock,
    fields: instructionBlocks
  } = useFieldArray({
    control,
    name: `${fieldName}.instructionBlocks`
  });

  const handleDelete = useCallback(() => remove(instructionIndex), [
    instructionIndex,
    remove
  ]);

  return (
    <fieldset>
      
      <H3>Anweisung {instructionIndex}</H3>
      <div className={`bg-${instruction.color} text-content-${instruction.color}`}>
        <DivCol>
          <TextField register={register} name={`${fieldName}.instruction`} label='Instruction' placeholder='Instruction' />
          {/* <input className="input" {...register(`${fieldName}.color`)} label='Color' value={color} readOnly/> */}
          {/* <ColorField register={register} name={`${fieldName}.color`} xxx={color} /> */}

        <div className={`bg-error w-10 `}>
          <input className={`bg-error w-10 `} {...register(`${fieldName}.color`)} type="radio" value="error"   label='Color'/>
        </div>
        <div className={`bg-warning w-10 `}>
          <input className={`bg-warning w-10 `} {...register(`${fieldName}.color`)} type="radio" value="warning" />
        </div>
        <div className={`bg-success w-10 `} >
          <input className={`bg-success w-10 `} {...register(`${fieldName}.color`)} type="radio" value="success" />
        </div>
        <TextField register={register} name={`${fieldName}.image`} label='Image' placeholder='Bild' />
        </DivCol>
        <DivCol>
          <Button label="delete" onClick={handleDelete} />
        </DivCol>
        </div> 
      <DivRow>
        <DivCol>
          {instructionBlocks.map((instructionBlock, instructionBlockIndex) => (
            <InstructionBlock
              key={instructionBlock.id}
              instructionBlockIndex={instructionBlockIndex}
              instructionIndex={instructionIndex}
              instructionBlock={instructionBlock}
              {...{register, control, handleSubmit, reset, trigger, setError, defaultValues, getValues, setValue, errors}}
              remove={removeInstructionBlock}
            />
          ))}

        
          <Button label="add instructionBlock" onClick={() => appendInstructionBlock({})} />
        </DivCol>
      </DivRow>
    </fieldset>
  );
};
