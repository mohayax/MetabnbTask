import React from 'react'
import mbtoken from '../assets/images/mbtoken.png';
import metamask from '../assets/images/metamask.png';
import opensea from '../assets/images/opensea.png';
import BannerItem from './BannerItem';
import './Banner.css';


const Banner =() =>{
  return (
    <div  className='bannerContainer'>
      <div className="itemContainer">
        <BannerItem icon={mbtoken} text="MB Token" alt='token_icon' />
        <BannerItem icon={metamask} text="METAMASK" alt='icon' />
        <BannerItem icon={opensea} text="OpenSea" alt='icon' /> 
      </div>
    </div>
  )
}

export default Banner