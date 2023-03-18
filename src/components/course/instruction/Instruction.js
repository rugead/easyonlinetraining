import React, { useCallback, useState } from "react";
import { Button } from "../../utilities/Button";
import { DivRow, DivCol } from "../../utilities/Div";
import { TextField } from "../../utilities/TextField";
import { useFieldArray } from "react-hook-form";
import { H3} from "../../utilities/Headline"
import { InstructionBlock } from "./InstructionBlock"

export const Instruction = ({ register, control, handleSubmit, reset, trigger, setError, defaultValues, getValues, setValue, errors, instructionIndex, remove, instruction }) => {
  const fieldName = `instructions.${instructionIndex}`;
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
    <fieldset className={``}>
      
      <div className={`card card-bordered border-${instruction.color} shadow-xl`}>
        <div className="card-body">
          <h2 className="card-title">{instructionIndex + 1}. Anweisung</h2>
          <div class="flex ">
              <input className={`radio radio-error m-3`} {...register(`${fieldName}.color`)} type="radio" value="error" />
              <input className={`radio radio-warning m-3`} {...register(`${fieldName}.color`)} type="radio" value="warning" />
              <input className={`radio radio-success m-3`} {...register(`${fieldName}.color`)} type="radio" value="success" />
              <input className={`radio radio-accent m-3`} {...register(`${fieldName}.color`)} type="radio" value="accent" />
              <input className={`radio radio-neutral m-3`} {...register(`${fieldName}.color`)} type="radio" value="neutral" />
              <input className={`radio radio-info m-3`} {...register(`${fieldName}.color`)} type="radio" value="info" />
              <input className={`radio radio-secondary m-3`} {...register(`${fieldName}.color`)} type="radio" value="secondary" />
              <input className={`radio radio-primary m-3`} {...register(`${fieldName}.color`)} type="radio" value="primary" />
          </div>
          <div className="flex">

            <input className={`input input-bordered w-full max-w-xs mx-3`} {...register(`${fieldName}.instruction`)} type="text" />
            <input className={`input input-bordered w-full max-w-xs mx-3`} {...register(`${fieldName}.image`)} type="text" />     
            <button className="btn" label="delete" onClick={handleDelete} >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
              </svg>
           </button>
          </div>
        
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
          <button type="button" className="btn btn-sm" onClick={() => appendInstructionBlock({})} > neuer Anweisungsblock </button>

        </div>
      </div> 
    </fieldset>
  );
};
