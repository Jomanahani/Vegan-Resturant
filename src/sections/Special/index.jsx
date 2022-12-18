import React from 'react'
import Card from '../../components/Card/Card';
import Title from '../../components/Title';
import './style.css';
import orangicon from '../../assets/orangeJuice.png'
import cheficon from '../../assets/chef1.png'
import dishicon from '../../assets/dish1.png'

function Special() {
  return (
    <section className='special'>
      <Title title='Special' supTitle='What makes us special'/>
        <div className='cardContainer'>
            <Card icon={orangicon} title='Fresh food' body=' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin hendrerit a amet viverra. Nunc pretium in amet at mattis cras. ' />
            <Card icon={cheficon} title='skilled Chef' body=' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin hendrerit a amet viverra. Nunc pretium in amet at mattis cras. ' />
            <Card icon={dishicon} title='Exotic dishes' body=' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin hendrerit a amet viverra. Nunc pretium in amet at mattis cras. ' />
        </div>
    </section>
  )
}

export default Special