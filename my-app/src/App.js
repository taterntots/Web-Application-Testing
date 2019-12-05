import React, { useState } from 'react';
import Display from './components/Display';
import Dashboard from './components/Dashboard';
import './App.css';

function App() {
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
    if (strikes < 2) {
      setStrikes(strikes + 1);
    } else if (strikes === 2) {
      setBalls(0);
      setStrikes(0);
    }
  }

  const hit = () => {
    setStrikes(0);
    setBalls(0);
  }

  const foul = () => {
    if (strikes < 2) {
      setStrikes(strikes + 1);
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>BaseBall Counter</h1>
        <Display balls={balls} strikes={strikes} />
        <Dashboard ball={ball} strike={strike} foul={foul} hit={hit} />
      </header>
    </div>
  );
}

export default App;


//------------------------------------------------OLD CODE----------------------------------------------------//


// function App() {
//   const [data, setData] = useState({
//     ballCount: 0,
//     strikeCount: 0,
//   })

//   const updateCount = (name, count) => {
//     if (name === 'strikeCount' && count === 3) {
//       count = 0;
//     } else if (name === 'ballCount' && count === 4) {
//       count = 0;
//     } else {
//       count = count + 1;
//     }
//     setData({...data, [name]: count});
//   }

//   return (
//     <div className="App">
//       <header className="App-header">
//         <h2>{data.ballCount}</h2>
//         <button onClick={() => updateCount('ballCount', data.ballCount)}>Ball Count</button>
//         <h2>{data.strikeCount}</h2>
//         <button onClick={() => updateCount('strikeCount', data.strikeCount)}>Strike Count</button>
//         <h2>{data.foulCount}</h2>
//         <button onClick={() => foulBall()}>Foul Ball</button>
//       </header>
//     </div>
//   );
// }

// export default App;