import React from 'react';
import './logo.css';

const Logo = (props) => {
    const { logoImg , classValue} = props;

    return (
        <a
            className={`${classValue} app-logo-link`}
            href="/"
            >
            <img src={logoImg} className="app-logo-image" alt="app logo" />
        </a>
    )
}

export default Logo;