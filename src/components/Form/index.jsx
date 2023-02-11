import React, { Component } from "react";

import email2 from '../../assets/email2.png'
import "./style.css";

export default class Form extends Component {
  render() {
    return (
      <div className="newsletter">
        <p>
          <img src={email2} alt="email" /> Subscribe to our Newsletter
        </p>
        <div>
        <input type="text" placeholder="Your Email id" />
        <button className="sub">Subscribe</button>
        </div>
      </div>
    );
  }
}
