import React from 'react'

import FooterLinks from './FooterLinks'
import './Footer.css';
import FLogo from '../assets/images/Flogo.png';

function Footer() {
    const CommunityLinks = ['NFT', 'Tokens', 'Landlords', 'Discord'];
    const Places = ['Castle', 'Farms', 'Beach', 'Learn more'];
    const About = ['Road map', 'Creators', 'Career', 'Contact us'];
return (
    <section id='footer'>
        <div className="footer-items">
            <div className="footer-icons">
                <div className="footer-logo">
                    <img src={FLogo} alt="logo" />
                </div>
                <div className="social-icons">
                    <a href="#"><i class="fa-brands fa-facebook-f facebook"></i></a>
                    <a href="#"><i class="fa-brands fa-instagram insta"></i></a> 
                    <a href="#"><i class="fa-brands fa-twitter"></i></a>
                </div>
                <div className="copy">
                    <p>&copy; 2022 Meatbnb</p>
                </div>
            </div>
                <FooterLinks title='Community' links={CommunityLinks} />
                <FooterLinks title='Places' links={Places} />
                <FooterLinks title='About US' links={About} />
        
        </div>
      
    </section>
)
}

export default Footer