import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

function Navbar() {
    return (
        <nav className="navbar">
          <div className="navbar-logo">SISCOMP</div>
          <Link to="/poscomp">Home</Link>
          <Link to="/poscomp/editor">Editor</Link>
        </nav>
    )
}

export default Navbar;