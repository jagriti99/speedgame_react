import React from 'react';
import "./Circle.css"

const Circle = (props) => {
    return (
        <div>
            <div className={`circle ${props.active ? 'active':''}`}
            style={{ pointerEvents: props.gameStatus ? 'all': 'none'}}
            onClick = {props.gameStatus ? props.click : null}
            >
                <p>{props.id}</p>
            </div>
        </div>
    );
};

export default Circle;

