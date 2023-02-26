import React, { useCallback } from "react";
import { Button } from "../../utilities/Button";
import { useFieldArray } from "react-hook-form";
import { InstructionBlock } from "./InstructionBlock"

export const Instruction = ({ register, control, handleSubmit, reset, trigger, setError, defaultValues, getValues, setValue, errors, instructionIndex, remove }) => {
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
  <>
   <fieldset className="card bg-base-100 shadow-xl my-5 p-5">
      <div className="prose p-2">
        <h3>Anweisung {instructionIndex + 1}</h3>
      </div>

      <div className="flex">
        <div className="form-control flex-grow p-1">
          <label className="label"><span className="label-text">Titel der Anweisung</span></label>
          <input {...register(`${fieldName}.title`)} className="input input-md input-bordered flex-grow" placeholder='Title' />
        </div>
        <div className="form-control flex-grow p-1">
          <label className="label"><span className="label-text">Subtitel der Anweisung</span></label>
          <input {...register(`${fieldName}.subTitle`)} className="input input-md input-bordered flex-grow" placeholder='Subtitle ' />
        </div>
        <div className="form-control w-max-xs p-1">  
          <label className="label"><span className="label-text">Farbe der Anweisung</span></label>
          <input {...register(`${fieldName}.color`)} className="input input-md input-bordered flex-1" placeholder='Color' />
        </div>
      </div>
      <div className="flex"> 
        <div className="form-control flex-grow p-1">    
          <input {...register(`${fieldName}.image`)} className="input input-md input-bordered flex-grow"  placeholder='Bild' />
        </div>
        <div className="form-control  p-1">    
          <button className="btn" onClick={handleDelete}> delete </button>
        </div>
      </div>

        <div>
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
        </div>
    </fieldset>

</>
);
};