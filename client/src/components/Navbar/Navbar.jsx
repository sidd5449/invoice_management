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
            <a href="auth/?registered=true"><button>Login</button></a>
        </div>
    </div>
  )
}

export default Navbar