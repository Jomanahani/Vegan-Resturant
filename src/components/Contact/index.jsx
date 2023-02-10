import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './style.css'

export default class Contact extends Component {
  render() {
    return (
      <div className='contact'>
        <FontAwesomeIcon icon={this.props.icon}></FontAwesomeIcon>
        <p>{this.props.contactWay}</p>
      </div>
    )
  }
}
