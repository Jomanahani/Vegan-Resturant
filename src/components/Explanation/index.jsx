import React from 'react'
import Button from '../Button'
import './style.css'

function Explanation({title,desc,para}) {
  return (
    <div className='Explanation'>
        <h2>{title}</h2>
        <h3>{desc}</h3>
        <p>{para}</p>
        <Button/>
    </div>
  )
}

export default Explanation