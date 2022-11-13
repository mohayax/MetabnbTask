import React from 'react'
import './FooterLinks.css';

function FooterLinks({title, links}) {
  return (
    <div className='footer-links'>
        <div className='linksTitle'>{title}</div>
        {links.map((item, i) => <div className='linkItems' key={i}><a href='#'>{item}</a></div>)}
    </div>
  );
}

export default FooterLinks