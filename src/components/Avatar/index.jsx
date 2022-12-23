import React, { Component } from 'react'

export default class Avatar extends Component {
  render() {
    return (
      <div>
        <img src={this.props.personalIMg} alt='personalIMg'/>
      </div>
    )
  }
}
