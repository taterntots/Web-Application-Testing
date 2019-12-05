import React from 'react';

const Display = props => {
    return (
        <div>
            <h2>{props.balls}</h2>
            <h2>{props.strikes}</h2>
        </div>
    )
}

export default Display;