import React from 'react'
import Button from '../../components/Button'
import ribbon from '../../assets/ribbon.png'
import './style.css'
function Discount() {
  return (
    <section className='discount'>
        <img src={ribbon} alt='ribbon'/>
        <div>
            <p>Come join us for a lunch this weekend and enjoy</p>
            <h5>FLAT 10% OFF</h5>
            <Button title='Book Now' />
        </div>
        <img src={ribbon} alt='ribbon'/>

    </section>
  )
}

export default Discount