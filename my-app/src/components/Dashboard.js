import React from 'react';

const Dashboard = props => {
    return (
        <div>
            <button onClick={() => props.ball()}>Ball!</button>
            <button onClick={() => props.strike()}>Strike!</button>
            <button onClick={() => props.foul()}>Foul Ball!</button>
            <button onClick={() => props.hit()}>Hit!</button>
        </div>
    )
}

export default Dashboard;