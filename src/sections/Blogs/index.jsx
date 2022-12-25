import React, { Component } from 'react'
import Title from '../../components/Title';
import ReadMore from '../../components/ReadMore'

export default class Blogs extends Component {
  render() {
    return (
      <div>
        <Title title='Blogs' supTitle='words from our food lovers'/>
        <ReadMore />
      </div>
    )
  }
}
