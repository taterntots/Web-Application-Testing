import React from 'react';

const Dashboard = props => {
    return (
        <div>
            <button onClick={() => props.ball()}>Ball Count</button>
            <button onClick={() => props.strike()}>Strike Count</button>
            <button onClick={() => props.foul()}>Foul Ball</button>
            <button onClick={() => props.hit()}>Hit!</button>
        </div>
    )
}

export default Dashboard;