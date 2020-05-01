import React from 'react';
import logo from '../../assets/logo.png';
import Logo from '../logo';
import './header.css';

const Header = () => {

    return (
        <header className="app-header">
            <Logo logoImg={logo} />
        </header>
    )
}

export default Header;