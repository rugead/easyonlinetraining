import React from 'react';


export const BgColors = ({onClick}) => {

  const colors = [ "error", "warning", "success", "info", "accent", "neutral", "base-100", "secondary", "primary" ]

  return ( 
    <div className='flex '>

    {colors.map(c => {
      return (

        <div key={c} data-color={c} className={`w-5 h-5 bg-${c}`} onClick={onClick}>
            &nbsp;
        </div>
        )
        })
      }
    </div>
   );
}

export const BgColorsInput = ({onClick}) => {

  const colors = [ "error", "warning", "success", "info", "accent", "neutral", "base-100", "secondary", "primary", "neutral" ]

  return ( 
    <div className='flex '>

    {colors.map(c => {
      return (

        <input className={`w-25 h-25 bg-${c}`}
          type={'text'}
          name={c}
          value={c}
          id={c}
          onClick={onClick} 
        />
        )
        })
      }
    </div>
   );
}

