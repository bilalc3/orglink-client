import React from "react";
import './Navbar.css';

function Navbar() {
    return(
        <nav class="navbar">
            <a href="/">
                <div class="left-header">
                    <h1 >Home</h1>
                </div>
            </a>
            <div class = "flexbox-item flexbox-item-2" >
                <h1>About</h1>
            </div>
            <div class = "flexbox-item flexbox-item-3" >'
                <h1>Contact</h1>
            </div>
        </nav>
    );




}

export default Navbar;