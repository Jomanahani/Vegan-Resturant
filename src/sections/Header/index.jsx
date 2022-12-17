import React from 'react';
import './style.css'
import Nav from '../../components/Nav/nav'
import Button from '../../components/Button/index'

class Header extends React.Component {
    render() {
      return (
        <header>
          <div className='shadw'>
          <Nav/>
          <div className='wellcoming'>
            <h1>Welcome To</h1>
            <h1> Golden View Dine </h1>
            <p>Explore the authentic vegan dishes with your friends and family</p>
          <Button />
          </div>
          </div>
        </header>
      );
    }
  }
  
export default Header;