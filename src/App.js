import React, { useState } from 'react';
import './App.css';

function App() {
  const [kg, setKg] = useState('');
  const [pounds, setPounds] = useState(0);

  const handleKgChange = (e) => {
    let val = parseFloat(e.target.value);
    if (isNaN(val)) {
      setPounds(0);
    } else {
      setPounds((val * 2.2).toFixed(2));
    }
    setKg(e.target.value);
  };

  return (
    <div className="container">
      <div className="header">
        <h1>Weight Converter</h1>
      </div>
      <div className="input">
        <label htmlFor="input" id="input-label">
          Weights in KG
        </label>
        <input
          type="text"
          id="input"
          placeholder="Enter your weights in KG"
          value={kg}
          onChange={handleKgChange}
        />
      </div>
      <div className="output">
        Your Weight in Pounds
        <p id="output">{pounds}</p>
      </div>
    </div>
  );
}

export default App;
