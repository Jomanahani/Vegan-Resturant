import React from 'react'
import './style.css'

function Feature({icon,number,type}) {
  return (
    <div className='feature'>
        <img src={icon} alt='icon'/>
        <div>
            <h5>{number}</h5>
            <p>{type}</p>
        </div>
    </div>
  )
}

export default Feature