import React from 'react';

import * as AiIcons from 'react-icons/ai';
import "./footer.css"

const Footer = () => {
    return (
        <footer className="d-flex-row justify-content-between">
           <div className="info-copyright d-flex-column">
               <span>Copyright &copy; 2021</span>
               <span>Diana Sánchez Ordoñez</span>
            </div>
            <div className="social-media">
                <a href="http://github.com/DianaSanchezOrdonez" target="_blank"><AiIcons.AiOutlineGithub /></a>
                <a href="https://www.linkedin.com/in/diana-isabel-sanchez-ordonez/" target="_blank"><AiIcons.AiOutlineLinkedin /></a>
            </div> 
        </footer>
    )
}

export default Footer
