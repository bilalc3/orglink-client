import React from "react";
import './Navbar.css';

function Navbar() {
    return(
        <nav className="navbar">
            <a href="/">
                <div className="left-header">
                    <h1 >OrgLink</h1>
                </div>
            </a>
            <div className = "right-header" >
                <h1>Contact</h1>
                <h1>About</h1>
            </div>
        </nav>
    );




}

export default Navbar;