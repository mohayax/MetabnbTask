import React from 'react'
import Card from './Card'
import image from '../assets/images/frame.png'
import f1 from '../assets/images/Frame1.png'
import f2 from '../assets/images/Frame2.png'
import f3 from '../assets/images/Frame3.png'
import f4 from '../assets/images/Frame4.png'
import f5 from '../assets/images/Frame5.png'
import f6 from '../assets/images/Frame6.png'
import f7 from '../assets/images/Frame7.png'
import './Cards.css';

function  Cards () {
  return (
    <div className='cards_container'>
        <header className='cardsHeader'>Inspiration for your next adventure</header>
        <div className="cardsItems">
            <Card img={image} name="Desert king" price="1MBT per night" distance="2345km away" availabilty="available for 2weeks stay" />
            <Card img={f1} name="Desert king" price="1MBT per night" distance="2345km away" availabilty="available for 2weeks stay" />
            <Card img={f2} name="Desert king" price="1MBT per night" distance="2345km away" availabilty="available for 2weeks stay" />
            <Card img={f3} name="Desert king" price="1MBT per night" distance="2345km away" availabilty="available for 2weeks stay" />
            <Card img={f4} name="Desert king" price="1MBT per night" distance="2345km away" availabilty="available for 2weeks stay" />
            <Card img={f5} name="Desert king" price="1MBT per night" distance="2345km away" availabilty="available for 2weeks stay" />
            <Card img={f6} name="Desert king" price="1MBT per night" distance="2345km away" availabilty="available for 2weeks stay" />
            <Card img={f7} name="Desert king" price="1MBT per night" distance="2345km away" availabilty="available for 2weeks stay" />
        </div>
    </div>
  )
}

export default Cards