import React from 'react'
import Explanation from '../../components/Explanation'
import './style.css'

function AboutSec({title,desc,para,imge}) {
  return (
    <div className='about'>
        <Explanation title={title} desc={desc} para={para}/>
        <img src={imge} alt='imge' className='image'/>
    </div>
  )
}
export default AboutSec