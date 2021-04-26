import React from 'react';
// import { Card } from 'react-bootstrap';
import "./Header.css";



const Header = () => {
    const headingStyle={
        color: "white",
        fontWeight:"700",
        fontSize:"45px"
    }
    return (
        <div className="header">
           <h1 style={headingStyle}>Team Pedia</h1>
        </div>
    );
};

export default Header;