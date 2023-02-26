import React, { useState } from 'react'
// import { H3 } from '../../utilities/Headline';
import no from '../../../img/no.jpg'


const InstructionShow = ({instructions}) => {
  
  // instructions
  // -- instructionBlocks
  // -- -- instructionBlockItems
 
  function ItemsTable(props) {
    return props.items.map((item, index) => {
      return (
        <div key={index}>
            {item.text}
        </div>
        
      ) 
    })
  }  

  function InstructionBlocks({instructionBlocks, bordercolor, bgcolor }) {

    return instructionBlocks?.map((block,index) => {
      return (
        <table  key={index}  className={`border-8 ${bordercolor} w-full p-2 `} >
          <thead className={`${bgcolor} w-full p-2`}>
           <tr key="1">
              <th scope="col" className={`${bgcolor} text-left`} >
                {block.image}  
              </th>
              <th scope="col" className={`${bgcolor} text-left align-top`} >
                {block.text}  
              </th>
            </tr>
          </thead>
          <tbody className="w-full bg-white divide-y divide-gray-200">
            <tr key={index}>
              <td className="">
                 <img src={no} alt="" className="" />        
              </td>
              <td className='align-top  text-left'>
                <ItemsTable  items={block.instructionBlockItems}/>
              </td>
            </tr>
          </tbody>
        </table>
      )
    })
  }

  function Instructions() {
    
    return instructions.map((instruction,index) => {
      let bordercolor = 'border-white'
      let bgcolor = 'bg-white'
      switch(instruction.color) {
        case 'blue': 
          bordercolor = 'border-blue-400'
          bgcolor = 'bg-blue-400'
          break
        case 'orange':
          bordercolor = 'border-orange-400'
          bgcolor = 'bg-orange-400'
          break
        case 'pink':
          bordercolor = 'border-pink-400'
          bgcolor = 'bg-pink-400'
          break
        case 'gray':
          bordercolor = 'border-gray-400'
          bgcolor = 'bg-gray-400'
          break
        case 'green':
          bordercolor = 'border-green-400'
          bgcolor = 'bg-green-400'
          break
        case 'white':
          bordercolor = 'border-white'
          bgcolor = 'bg-white'
          break
        case 'black':
          bordercolor = 'border-black'
          bgcolor = 'bg-black'
          break
        case 'red':
          bordercolor = 'border-red-400'
          bgcolor = 'bg-red-400'
          break
        case 'secondary':
          bordercolor = 'border-secondary'
          bgcolor = 'bg-secondary'
          break 
        default:
          bordercolor = 'border-primary'
          bgcolor = 'bg-primary'
        } 
        
        console.log('bgcolor: ', bgcolor);
        console.log('bordercolor: ', bordercolor);
      return (
        <div key={index} className={`${bordercolor} ${bgcolor}`}>
          
          {instruction?.instruction}
          {instruction?.color}
          {instruction?.image}      
          <InstructionBlocks bgcolor={bgcolor} bordercolor={bordercolor} instructionBlocks={instruction.instructionBlocks} />
        </div>
      )
    })
  }



  return (  
      <Instructions />
  );
}
 
export default InstructionShow;