import React from 'react'

export default function FormattedDate({isHighlight,items}) {
    return (
      
    <div  className={isHighlight ? 'text-amber-700  font-bold' : ''}>{items}</div>
       
    )
}
