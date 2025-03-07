import {dataabout} from '@/_data/about'
import React from 'react'

export default function About() {
  return (
    <div>
      <div>{dataabout.title}</div>
      <div>{dataabout.description}</div>

    </div>
  )
}
