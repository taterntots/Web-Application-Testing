import React, { useState } from 'react';
import './App.css';

function App() {
  // const [data, setData] = useState({
  //   ballCount: 0,
  //   strikeCount: 0,
  // })

  // const updateCount = (name, count) => {
  //   if (name === 'strikeCount' && count === 3) {
  //     count = 0;
  //   } else if (name === 'ballCount' && count === 4) {
  //     count = 0;
  //   } else {
  //     count = count + 1;
  //   }
  //   setData({...data, [name]: count});
  // }

  const [balls, setBalls] = useState(0);
  const [strikes, setStrikes] = useState(0);

  const ball = () => {
    if (balls < 3) {
      setBalls(balls + 1);
    } else if (balls === 3) {
      setBalls(0);
      setStrikes(0);
    }
  }

  const strike = () => {
    if(strikes < 2) {
      setStrikes(strikes + 1);
    } else if (strikes === 2) {
      setBalls(0);
      setStrikes(0);
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>BaseBall Counter</h1>
        <h2>{balls}</h2>
        <button onClick={() => ball()}>Ball Count</button>
        <h2>{strikes}</h2>
        <button onClick={() => strike()}>Strike Count</button>
        {/* <h2>{data.ballCount}</h2>
        <button onClick={() => updateCount('ballCount', data.ballCount)}>Ball Count</button>
        <h2>{data.strikeCount}</h2>
        <button onClick={() => updateCount('strikeCount', data.strikeCount)}>Strike Count</button>
        <h2>{data.foulCount}</h2>
        <button onClick={() => foulBall()}>Foul Ball</button> */}
      </header>
    </div>
  );
}

export default App;