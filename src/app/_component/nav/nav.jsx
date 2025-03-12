"use client"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useState } from 'react';

export default function Nav() {
  const [isMouse,setIsMouse] = useState({});
  const nav = [
    { title: "About", section_ID: "section-about" },
    { title: "experience", section_ID: "section-experience" },
    { title: "project", section_ID: "section-project" },
    { title: "Arcitle", section_ID: "section-arcitle" },
  ]
  const handleclick = (ID) => {
   document.getElementById(ID)?.scrollIntoView({behavior:"smooth"})
  }
  return (
    <div className="flex flex-col  font-semibold">
      {nav.map((element, index) => (
        <div key={`nav-${element}-${index}`}
          onClick={() => handleclick(element.section_ID)}
          onMouseEnter={()=>setIsMouse({[element.title]:true})}
          onMouseLeave={()=>setIsMouse({[element.title]:false})}
          className='cursor-pointer flex p-3'
        >
          <div className={`new-arrow text-nothing-Blue mr-2 ${isMouse[element.title] ? "":"hidden"} `}><ArrowForwardIcon /></div>
          <div className={`${isMouse[element.title] ? "translate-x-3":""} transition-all duration-500 ease-out`}>{element.title}</div>

        </div>

      ))}

    </div>
  )
}

