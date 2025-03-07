import React from 'react'
import Header from '../nav/header/header'
import Nav from '../nav/nav'
import Contact from '../nav/contact/contact'

export default function LeftSection() {
  return (
    <div >
        <div className="sticky top-14 gap-y-5 grid lg:grid-rows-[35%_45%_20%] lg:h-[87vh] ">
         <Header/>
         <Nav/>
         <Contact/>
        </div>
      </div>
  )
}
