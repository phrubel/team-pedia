import React from 'react';

const NotFound = () => {
    const errorStyle={
        textAlign:"center",
        color:"red",
        fontWeight:"600"
    }
    return (
        <div style={errorStyle}>
            <h1>Something went wrong......!!!</h1>
            <h3>Please try again...!</h3>
        </div>
    );
};

export default NotFound;