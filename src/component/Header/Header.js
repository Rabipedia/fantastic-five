import React from 'react';
import logo from '../../images/logo.jpg'
import './Header.css';

const Header = () => {
    return (
        <div className='header'>
            <h3>This is header</h3>
            <img className='logo' src={logo} alt=""/>
        </div>
    );
};

export default Header;