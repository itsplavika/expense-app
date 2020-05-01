import * as React from 'react';
import './button.css';

const Button = (props) => {
    const {
        className,
        buttonText,
        clickHandler
    } = props;

    return (
        <button
            className={`btn ${className}`}
            onClick={clickHandler}
        >
            {buttonText}
        </button>
    )
}

export default Button;
