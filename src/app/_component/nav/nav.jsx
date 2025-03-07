"use client"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function Nav() {
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
    <div className="flex flex-col gap-3 font-semibold">
      {nav.map((element, index) => (
        <div key={`nav-${element}-${index}`}
          onClick={() => handleclick(element.section_ID)}
        >
          <ArrowForwardIcon />
          {element.title}

        </div>

      ))}

    </div>
  )
}

