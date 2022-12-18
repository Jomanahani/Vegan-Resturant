import React from 'react'
import Explanation from '../../components/Explanation'
import './style.css'
import imge from '../../assets/about.png'

function AboutUs() {
  return (
    <section>
        <Explanation title='About Us' 
        desc='Discover the taste of worldclass vegan dishes from the kitchen of Go Green Dine' 
        para='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit ratione, sint id similique facilis ea,ipsum dolor sit amet consectetur adipisicing elit. repudiandae velit voluptas modi saepe ducimus ut eveniet reprehenderit ullam voluptate,ipsum dolor sit amet consectetur adipisicing elit. dolor libero ipsum neque?' />
        <img className='salad' src={imge} alt='saladImag'/>
    </section>
  )
}
export default AboutUs