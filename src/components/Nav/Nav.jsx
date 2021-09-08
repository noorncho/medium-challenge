import React from 'react';
import "./Nav.scss";
import Button from '../Button/Button';

const Nav = () => {
    return (
        <nav>
            <div className="nav-title">
                <h1>Meidum</h1> 
                <h2>| Programming</h2>
            </div>
            <div className="nav-items">
                <a href="#1">Become a Memeber</a>
                <a href="#2">Sign in</a>
                <Button buttonText="Get started" isPrimary />
            </div>
        </nav>
    )
}

export default Nav;
