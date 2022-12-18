import React from 'react'
import './style.css'

function Title({title,supTitle}) {
  return (
    <div className='title'>
        <h2>{title}</h2>
        <h3>{supTitle}</h3>
    </div>
  )
}

export default Title