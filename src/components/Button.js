import React from 'react';

const Button = ({ children, handleClick }) => {
    console.log("rendering button");

    return (
        <button onClick={handleClick}>{children}</button>
    );
};

export default Button;