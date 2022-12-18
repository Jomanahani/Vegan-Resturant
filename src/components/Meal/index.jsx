import React from 'react'
import './style.css'

function Meal({img,Name,price}) {
  return (
    <div className='meal'>
        <img src={img} alt='mealImage' />
        <div>
            <h5>{Name}</h5>
            <p>Lorem ipsum dolor sit amet</p>
        </div>
        <hr />
        <p className='price'>{price}</p>
    </div>
  )
}

export default Meal