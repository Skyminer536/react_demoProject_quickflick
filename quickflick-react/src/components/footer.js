import React from 'react';
import "../css/style.css";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        
        <footer>
            <div>
                <img src="./img/quickflick_logo.png"/>
                <p>Copyright &copy 2025 | QuickFlick inc.</p>
            </div>

            <div className="additionalLinks">
                <h2>Additional Links</h2>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/videos">Videos</Link></li>
                    <li><a href="https://policies.google.com/u/1/privacy?hl=en-GB#infochoices">Privacy Policy</a></li>
                    <li><a href="/">Terms of Use</a></li>
                </ul>

            </div>
        </footer>
        
        

    );

}

export default Footer;