import React from 'react'
import Card from '../../components/Card/Card';
import './style.css';
import orangicon from '../../assets/orangeJuice.png'
import cheficon from '../../assets/chef1.png'
import dishicon from '../../assets/dish1.png'

function Special() {
  return (
    <section className='special'>
        <h2>Special</h2>
        <h3>What makes us special</h3>
        <div className='cardContainer'>
            <Card icon={orangicon} title='Fresh food' body=' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin hendrerit a amet viverra. Nunc pretium in amet at mattis cras. ' />
            <Card icon={cheficon} title='skilled Chef' body=' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin hendrerit a amet viverra. Nunc pretium in amet at mattis cras. ' />
            <Card icon={dishicon} title='Exotic dishes' body=' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin hendrerit a amet viverra. Nunc pretium in amet at mattis cras. ' />
        </div>
    </section>
  )
}

export default Special