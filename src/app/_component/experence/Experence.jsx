"use client"
import React, { useState } from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import FormattedDate from './FormattedDate';
import Picture from './Picture';
import {data} from '@/_data/Expernce'
export default function Experence() {
  const [isMouseEnter, setIsMouseEnter] = useState({});
  return (
    <div className='space-y-4'>
      <div className={``}>nothing</div>
      <div className={`grid px-2 py-6 grid-cols-[25%_75%] transition-all rounded-sm ${isMouseEnter['A1'] ? "bg-nothing-Purple" : ""}`}
        onMouseEnter={() => setIsMouseEnter(prev => ({ ...prev, A1: true }))}
        onMouseLeave={() => setIsMouseEnter(prev => ({ ...prev, A1: false }))} 
        id='section-about'
      >
        <div>
         
            <FormattedDate isHighlight={isMouseEnter['A1']} items="2020-2024" />
          <Picture props={data.url}/>
          
          
        </div>
        <div className='grid gap-y-4 '>
          <div>Fashion Ecommerce</div>
          <div className='flex gap-4 text-lg'>
            <GitHubIcon />
            <GitHubIcon />
            <GitHubIcon />
          </div>
          <div className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi cum quaerat sapiente culpa modi placeat, a sed cupiditate totam ex ab magnam ratione laborum repellendus voluptas? Animi sed nihil omnis.</div>
          <div className='flex gap-4'>
            <div>React</div>
            <div>tiawind</div>
          </div>
        </div>
      </div>
      <div className={`grid px-2 py-6 grid-cols-[25%_75%] transition-all rounded-sm ${isMouseEnter['A1'] ? "bg-nothing-Purple" : ""}`}
        onMouseEnter={() => setIsMouseEnter(prev => ({ ...prev, A1: true }))}
        onMouseLeave={() => setIsMouseEnter(prev => ({ ...prev, A1: false }))} 
        id='section-project'
      >
        <div>
         
            <FormattedDate isHighlight={isMouseEnter['A1']} items="2020-2024" />
          <Picture props={data.url}/>
          
          
        </div>
        <div className='grid gap-y-4 '>
          <div>Fashion Ecommerce</div>
          <div className='flex gap-4 text-lg'>
            <GitHubIcon />
            <GitHubIcon />
            <GitHubIcon />
          </div>
          <div className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi cum quaerat sapiente culpa modi placeat, a sed cupiditate totam ex ab magnam ratione laborum repellendus voluptas? Animi sed nihil omnis.</div>
          <div className='flex gap-4'>
            <div>React</div>
            <div>tiawind</div>
          </div>
        </div>
      </div>
      <div className={`grid px-2 py-6 grid-cols-[25%_75%] transition-all rounded-sm ${isMouseEnter['A1'] ? "bg-nothing-Purple" : ""}`}
        onMouseEnter={() => setIsMouseEnter(prev => ({ ...prev, A1: true }))}
        onMouseLeave={() => setIsMouseEnter(prev => ({ ...prev, A1: false }))} 
        id='section-arcitle'
      >
        <div>
         
            <FormattedDate isHighlight={isMouseEnter['A1']} items="2020-2024" />
          <Picture props={data.url}/>
          
          
        </div>
        <div className='grid gap-y-4 '>
          <div>Fashion Ecommerce</div>
          <div className='flex gap-4 text-lg'>
            <GitHubIcon />
            <GitHubIcon />
            <GitHubIcon />
          </div>
          <div className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi cum quaerat sapiente culpa modi placeat, a sed cupiditate totam ex ab magnam ratione laborum repellendus voluptas? Animi sed nihil omnis.</div>
          <div className='flex gap-4'>
            <div>React</div>
            <div>tiawind</div>
          </div>
        </div>
      </div>

    </div>
  )
}
