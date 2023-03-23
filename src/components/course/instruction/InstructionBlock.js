import React, { useCallback } from "react";
import { InstructionBlockItem } from "./InstructionBlockItem";
import { useFieldArray } from "react-hook-form";

export const InstructionBlock = ({ appendInstruction, register, control, handleSubmit, reset, trigger, setError, defaultValues, getValues, setValue, errors, instructionIndex, instructionBlockIndex, appendInstructionBlock, remove  }) => {
  
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
    <div key={instructionBlockIndex} className="border-2 p-6 rounded-lg">
      <div className="flex justify-between">
        <h2 className="font-bold ">{instructionBlockIndex + 1 }. Anweisungsblock</h2>
        <ul className="menu menu-horizontal px-1">
          <li tabIndex={0}>
          <button className="" type="button" onClick={() => handleDelete({})} >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
              </svg>
            </button>
          </li>
        </ul>
      </div>
      <div className="flex gap-2 pb-4">
        <input placeholder="Some text..." className={`input input-bordered w-full`} {...register(`${fieldName}.text`)} type="text" />
        <input placeholder="Image URL http://...." className={`input input-bordered w-full`} {...register(`${fieldName}.image`)} type="text" />
      </div>
      <div className="">
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
      </div>
      <div className="pt-1">
        <button type="button" className="btn" label="add" onClick={() => appendInstructionBlockItem({})} > add block item </button>
      </div>
    </div>
  );
};



