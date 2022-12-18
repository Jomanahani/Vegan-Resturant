import React from 'react'
import './style.css'

function Button({title='Read more'}) {
  return (
    <button className='readBut'>{title}</button>
  )
}

export default Button