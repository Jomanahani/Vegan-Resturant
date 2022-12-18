import React from 'react'
import imge from '../../assets/ingredients.png'
import AboutSec from '../../components/AboutSec'

function Ingredients() {
  return (
    <section>
      <AboutSec title='Cooking ingredients' 
      desc='What Goes In' 
        para='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin hendrerit a 
        amet viverra. Nunc pretium in amet at mattis cras. Quisque commodo mattis ornare a nec odio.
         Pulvinar orci, egestas eget nulla duis at iaculis nunc, elit. Nibh auctor purus nunc tellus
          pellentesque nibh mattis. Malesuada integer nulla orci convallis sit. At libero lacus, eget 
          fermentum sed turpis curabitur donec consectetur. Imperdiet aliquam quam mauris semper suscipit.'
        imge={imge}
        />
    </section>
  )
}
export default Ingredients