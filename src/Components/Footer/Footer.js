import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <span className="name">
              Inshorts clone made by -
             Prateek Agrawal
            </span>
        <hr style={{ width: "90%" }} />
        <div className="iconContainer">
            <a href="https://github.com/prateekagrawl" target="__blank">
            <i className="fab fa-github fa-2x"> </i>
            </a>
            <a href="https://www.linkedin.com/in/prateek-agrawal-56b63b16b/" target="__blank">
            <i className="fab fa-linkedin fa-2x"></i>
            </a>
            <a href="https://prateekagrawalportfolio.netlify.app/" target="__blank">
            <i className="fas fa-link fa-2x"></i>
            </a>
        </div> 
            </div>
    )
}

export default Footer
