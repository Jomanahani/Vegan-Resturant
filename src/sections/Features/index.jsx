import React from 'react'
import Feature from '../../components/Feature/index'
import Delicacy from '../../assets/delicacy.png'
import chef from '../../assets/chef.png'
import members from '../../assets/members.png'
import './style.css'


function Features() {
  return (
    <div className='featuresSec'>
        <Feature icon={Delicacy} number='250+' type='Delicacy'/>
        <Feature icon={chef} number='10+' type='renowed chefs'/>
        <Feature icon={members} number='30+' type='Members'/>
    </div>
  )
}

export default Features