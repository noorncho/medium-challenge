import React from 'react';
import "./Button.scss";

const Button = (props) => {
    //const {buttonText} = props
    const {buttonText, isPrimary} = props;
    const buttonStyle = isPrimary ? "button primary" : "button secondary";

    return (
        <button className={buttonStyle}>{buttonText}</button>
        //<button>{buttonText}</button>
    )
}

export default Button;
