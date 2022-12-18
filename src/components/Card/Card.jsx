import React from 'react';
import './style.css'

function Card({icon,title,body}) {
  return (
    <div className='card'>
        <img src={icon} alt={title}/>
        <h4>{title}</h4>
        <p>{body}</p>
    </div>
  )
}

export default Card