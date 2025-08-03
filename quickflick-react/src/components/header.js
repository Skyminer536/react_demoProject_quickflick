import React from 'react';
import "../css/style.css";
import { Outlet, Link } from "react-router-dom";


const Header = () => {

    return (
        <>
        <div className="header">
            <div>
                <img src="./img/quickflick_logo.png"/>
                <a className="login">Log In</a>
            </div>

            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/videos">Videos</Link></li>

                </ul>

            </nav>
        </div>
        <Outlet />
        </>
    );


}

export default Header;