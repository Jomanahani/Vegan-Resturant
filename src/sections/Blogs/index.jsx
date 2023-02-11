import React, { Component } from "react";

import Title from "../../components/Title";
import ExperienceCard from "../../components/ExperienceCard";
import rice  from "../../assets/item7.png";
import salad  from "../../assets/item8.png";
import cheseCake from "../../assets/item9.png";


import "./style.css";

export default class Blogs extends Component {
  render() {
    return (
      <div className="blogs">
        <Title title="Blogs" supTitle="words from our food lovers" />
        <div className='expContainer'>
          <ExperienceCard
            mealImg={rice}
            commint="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin "
          />
          <ExperienceCard
            isReverse='true'
            mealImg={salad}
            commint="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin "
          />
          <ExperienceCard
            mealImg={cheseCake}
            commint="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin "
          />
        </div>
      </div>
    );
  }
}
