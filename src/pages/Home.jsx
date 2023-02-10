import React from "react";

import Header from "../sections/Header/index";
import AboutUs from "../sections/AboutUs/indx";
import Special from "../sections/Special";
import Menu from "../sections/Menu";
import Discount from "../sections/Discount";
import Ingredients from "../sections/Ingredients/index";
import Features from "../sections/Features/index";
import Reviews from "../sections/Reviews/index";
import Blogs from "../sections/Blogs/index";
import Footer from "../sections/Footer";

import "./home.css";
class HomePage extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <main>
          <AboutUs />
          <Special />
          <Menu />
          <Discount />
          <Ingredients />
          <Features />
          <Reviews />
          <Blogs />
        </main>
          <Footer />
      </div>
    );
  }
}

export default HomePage;
