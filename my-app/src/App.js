import React, { useState } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState({
    ballCount: 0,
    strikeCount: 0,
    hitCount: 0,
    foulCount: 0
  })

  const updateCount = (name, count) => {
    if (name === 'strikeCount' && count === 3) {
      count = 0;
    } else if (name === 'ballCount' && count === 4) {
      count = 0;
    } else {
      count = count + 1;
    }
    setData({...data, [name]: count});
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>BaseBall Counter</h1>
        <h2>{data.ballCount}</h2>
        <button onClick={() => updateCount('ballCount', data.ballCount)}>Ball Count</button>
        <h2>{data.strikeCount}</h2>
        <button onClick={() => updateCount('strikeCount', data.strikeCount)}>Strike Count</button>
      </header>
    </div>
  );
}

export default App;