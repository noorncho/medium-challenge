import React from 'react';

const Button = (props) => {
    const {buttonText, isPrimary} = props;
    const buttonStyle = isPrimary ? "button primary" : "button secondary";

    return (
        <button className={buttonStyle}>{buttonText}</button>
    )
}

export default Button;
