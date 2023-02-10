import React, { Component } from "react";

import Form from "../../components/Form";
import CopyRight from "../../components/CopyRight";

import insta from '../../assets/insta.png'
import twitter from '../../assets/twitter.png'
import youtube from '../../assets/youTube.png'
import logo from '../../assets/logo.png'
import email from '../../assets/email.png'
import gps from '../../assets/gps.png'
import phone from '../../assets/phone.png'

import "./style.css";

export default class Footer extends Component {
  render() {
    return (
      <footer>

        <div className="upper_Footer">

          <div className="footerHead">
            <div className="footerHead1">
            <img src={logo} alt="logo" />
              <p>Golden View Dine</p>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Sollicitudin
            </p>
            <div className="socialIcon">
              <img src={insta} alt='insta' />
              <img src={twitter} alt='twitter' />
              <img src={youtube} alt='youtube' />
            </div>
          </div>

          <div className="footerTail">
            <p className="footerTilte">Other Links</p>
            <ul>
              <li>Privacy Policy</li>
              <li>Terms & conditions</li>
              <li>Blogs</li>
              <li>our team</li>
              <li>Our kitchen</li>
            </ul>
          </div>
          <div className="footerContact">
            <p className="footerTilte">Contact Us</p>
            <p>
              <img src={email} alt="email" /> Gogreendineservice@gmail.com
            </p>
            <p>
              <img src={gps} alt="gps" /> AZ complex bylane3 Mandari Rd Mumbai
              1100867
            </p>
            <p>
              <img src={phone} alt="email" /> +1800 287 256
            </p>
          </div>
        </div>
        <Form />
        <CopyRight />
      </footer>
    );
  }
}
