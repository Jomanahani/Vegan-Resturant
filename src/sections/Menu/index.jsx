import React from 'react'
import Meal from '../../components/Meal'
import item1 from '../../assets/item1.png';
import item2 from '../../assets/item2.png';
import item3 from '../../assets/item3.png';
import item4 from '../../assets/item4.png'
import item5 from '../../assets/item5.png'
import item6 from '../../assets/item6.png'
import './style.css'

function Menu() {
  return (
    <section className='menu'>
        <h3>Straight From Kitchen</h3>
        <h4>Our Menu</h4>
        <div className='menuContainer'>
            <div>
                <Meal img={item1} Name='Lorem ipsum dolor sit amet' price='Rs 222'/>
                <Meal img={item2} Name='Vivamus sodales augue vita' price='Rs 590'/>
                <Meal img={item3} Name='Pellentesque semper semper' price='Rs 130'/>
                <Meal img={item4} Name='Vestibulum est turpis' price='Rs 135'/>
                <Meal img={item5} Name='Phasellus convallis maximus' price='Rs 148'/>
                <Meal img={item6} Name='Nullam elementum magna' price='Rs 200'/>
            </div>
            <div>
                <Meal img={item5} Name='Phasellus convallis maximus' price='Rs 148'/>
                <Meal img={item4} Name='Vestibulum est turpis' price='Rs 135'/>
                <Meal img={item2} Name='Vivamus sodales augue vita' price='Rs 590'/>
                <Meal img={item1} Name='Lorem ipsum dolor sit amet' price='Rs 222'/>
                <Meal img={item6} Name='Nullam elementum magna' price='Rs 200'/>
                <Meal img={item3} Name='Pellentesque semper semper' price='Rs 130'/>
            </div>
        </div>
    </section>
  )
}

export default Menu