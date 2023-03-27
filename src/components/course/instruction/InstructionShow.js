import React from 'react'
import no from '../../../img/no.jpg'

export const InstructionShow = ({instructions}) => {

  return (  
    <div className="py-4 rounded-xl">
    
      {instructions.map((i, index) => {
          let color = i.color
          return (
            <div key={index} className={`flex flex-col p-4 rounded-xl gap-4   bg-${color}`}>
              <div className={`flex rounded-xl gap-4` }>
                <img className="w-48 h-24 rounded-xl" src={i.image} alt={i.instruction} />
                <h3 className="text-xl font-bold">{i.instruction}</h3>
              </div>
              <div className="flex flex-col gap-4 rounded-xl">
                {i && i.instructionBlocks.map((ib, index) => {
                  return (
                    <div key={index} className="bg-base-100 rounded-xl py-8" >  
                      <div className={`flex p-4 rounded-xl gap-4` }>
                        {ib && ib.image ? <img className="w-24 h-24 rounded-xl" src={ib.image} alt={ib.text} /> : <img className="w-24 h-24 rounded-xl" src={no} alt="noimage" /> }
                        <div className="">
                          <div className="h-24">
                            {ib.text}
                          </div>
                          {ib && ib?.instructionBlockItems.map((ibi, index) => {
                            return (
                              <div key={index} >  
                                  <p className="">- {ibi.text}</p>
                              </div>
                            )
                          })}
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          )
      })}
    </div>
  );
}
 
// export default InstructionShow;