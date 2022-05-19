import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function Navbar() {
    return(
        <div className="nav-bar">
            <div className="nav-inner">
                <nav className="nav-items">
                    <div className="nav-link-container">
                        <Link to="/" className="nav-link">Home</Link>
                    </div>
                    <div className="nav-link-container">
                        <Link to="/exercise1" className="nav-link">Exercise1</Link>
                    </div>
                    <div className="nav-link-container">
                        <Link to="/exercise2" className="nav-link">Exercise2</Link>
                    </div>
                    <div className="nav-link-container">
                        <Link to="/exercise3" className="nav-link">Exercise3</Link>
                    </div>
                    <div className="nav-link-container">
                        <Link to="/exercise4" className="nav-link">Exercise4</Link>
                    </div>
                    <div className="nav-link-container">
                        <Link to="/exercise5" className="nav-link">Exercise5</Link>
                    </div>
                    <div className="nav-link-container">
                        <Link to="/exercise6" className="nav-link">Exercise6</Link>
                    </div>
                    <div className="nav-link-container">
                        <Link to="/exercise7" className="nav-link">Exercise7</Link>
                    </div>
                    <div className="nav-link-container">
                        <Link to="/exercise8" className="nav-link">Exercise8</Link>
                    </div>
                    <div className="nav-link-container">
                        <Link to="/exercise9" className="nav-link">Exercise9</Link>
                    </div>
                </nav>
            </div>
        </div>
    );
}
export default Navbar;
