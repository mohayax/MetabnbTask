import React from 'react'
import './BannerItem.css';

const BannerItem = ({icon, text, alt }) => {
  return (
    
        <div className='banner'>
          <div className="bannerIcon"><img src={icon} alt={alt} /></div>
          <div className="txtBanner">{text}</div>
        </div>

  )
}

export default BannerItem