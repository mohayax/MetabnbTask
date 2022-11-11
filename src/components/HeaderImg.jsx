import React from 'react'
import './HeaderImage.css';



const HeaderImg = ({img, alt}) => {
  return ( 
    <div className='image'>
          <img src={img} alt='alt' />
    </div>
  )
}


export default HeaderImg