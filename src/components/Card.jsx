import React from 'react'
import "./Card.css";

function Card({img, name, price, distance, availabilty, alt}) {
  return (
    <div className='card'>
        <div className="cardImage">
            <img src={img} alt={alt} />
        </div>
        <div className="title">
            <div className="name">{name}</div>
            <div className="price">
                {price}
            </div>
        </div>
        <div className="distance_aval">
            <div className="distance">{distance}</div>
            <div className="aval">
                {availabilty}
            </div>
        </div>
        <div className='star'>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
        </div>
    </div>
  )
}

export default Card