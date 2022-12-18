import React from 'react'
import imge from '../../assets/about.png'
import AboutSec from '../../components/AboutSec'

function AboutUs() {
  return (
    <section>
      <AboutSec title='About Us' 
      desc='Discover the taste of worldclass vegan dishes from the kitchen of Go Green Dine' 
        para='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit ratione, sint 
        id similique facilis ea,ipsum dolor sit amet consectetur adipisicing elit. repudiandae 
        velit voluptas modi saepe ducimus ut eveniet reprehenderit ullam voluptate,ipsum dolor 
        sit amet consectetur adipisicing elit. dolor libero ipsum neque?'
        imge={imge}
        />
    </section>
  )
}
export default AboutUs