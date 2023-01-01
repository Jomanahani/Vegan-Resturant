import React, { Component } from 'react'

import ReadMore from '../ReadMore'

import './style.css'


export default class ExperienceCard extends Component {
  render() {
    return (
      <div className={this.props.isReverse ? 'ExperienceCard revrse' : 'ExperienceCard'} >
        <img src={this.props.mealImg} alt='meal' />
        <div>
            <h4>Cooking Dining Experience</h4>
            <p>{this.props.commint}</p>
            <ReadMore />
        </div>
      </div>
    )
  }
}
