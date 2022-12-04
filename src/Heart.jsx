import React from 'react';
import "./Heart.css";

const Heart = (props) => {
    return (
        <div>
            <div className='text'>{props.text}</div>
            <div className='heart'></div>
        </div>
    );
};

export default Heart;