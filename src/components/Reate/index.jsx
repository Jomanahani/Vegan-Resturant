import React, { Component } from 'react'
import star from '../../assets/Vector.png'
import './style.css'

export default class Reate extends Component {
  render() {
    return (
      <div className='reate'>
        <img src={star} alt='star' />
        <img src={star} alt='star' />
        <img src={star} alt='star' />
        <img src={star} alt='star' />
        <img src={star} alt='star' />
      </div>
    )
  }
}
