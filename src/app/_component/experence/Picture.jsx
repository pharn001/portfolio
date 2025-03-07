
import React from 'react'

export default function Picture({props}) {
    return (
        <div>
            <img className='w-5/6 rounded-sm' src={props} alt="" />

        </div>
    )
}
