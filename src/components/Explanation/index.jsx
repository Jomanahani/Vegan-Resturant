import React from 'react'
import Button from '../Button'
import Title from '../Title'
import './style.css'

function Explanation({title,desc,para}) {
  return (
    <div className='Explanation'>
      <Title title={title} supTitle={desc}/>
        <p>{para}</p>
        <Button/>
    </div>
  )
}

export default Explanation