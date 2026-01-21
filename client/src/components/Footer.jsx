import React from 'react';
import './Components.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return(
        <div className='footer-div'>
            <h6>&copy; {currentYear} Mikes World. All rights reserved.</h6>
        </div>
    )
}

export default Footer;