import React from 'react';
import './Navbar.scss';

const Navbar = () => {
  return (
    <div className="app__navbar">
        <h2>SureInvoice</h2>
        <div className="app__navbar-mid">
            <a href="">About Us</a>
            <a href="">Contact Us</a>
        </div>
        <div className="app__navbar-right">
            <button>Login</button>
        </div>
    </div>
  )
}

export default Navbar