import React from 'react'
import Avatar from '../Avatar'
import Reate from '../Reate'
import './style.css'

function Comment({img}) {
  return (
    <div className='comment'>
      <div className='account'>
        <Avatar personalIMg={img}/>
        <div className='name'>
            <p>Alex andrina</p>
            <Reate />
        </div>
        </div>
        <p> "Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Quam fugit reiciendis quibusdam nihil! Voluptatum, quos. 
             Saepe, reiciendis similique. Deserunt, dignissimos.
             Soluta, doloribus provident. Cum alias, recusandae
              amet repellat exercitationem incidunt."</p>
    </div>
  )
}

export default Comment