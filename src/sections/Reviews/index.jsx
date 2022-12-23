import React, { Component } from 'react'
import Title from '../../components/Title'
import Comment from '../../components/Comment'
import avatar from '../../assets/avatar1.png'
import './style.css'

export default class Reviews extends Component {
  render() {
    return (
      <div className='reviews'>
        <Title title='Reviews' supTitle='words from our food lovers'/>
        <div className='comments'>
        <Comment img={avatar}/>
        <Comment img={avatar}/>
        <Comment img={avatar}/>
        </div>
      </div>
    )
  }
}
