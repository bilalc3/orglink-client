import React from "react";
import './Navbar.css';

const Navbar = () => {
    return(
        <nav className="navbar gradient-bg">
            <a href="/">
                <div className="left-header">
                    <h1>OrgLink</h1>
                </div>
            </a>
            <div className = "right-header" >
                <h1>Login</h1>
                <a href="/about">
                    <h1>About</h1>
                </a>
            </div>
        </nav>
    );




}

export default Navbar;