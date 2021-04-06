import React, { useState } from 'react';
// import ReactDOM from 'react-dom';
import Countdown from './Before-countdownModule';
import './index.css';

export const AppRefactBefore = () => {
  const [startTime, setStartTime] = useState(30);

  return (
    <div>
      <label>
        set the timer
        <br />
        <input
          type="range"
          value={startTime}
          onChange={e => setStartTime(e.target.value)}
        />
      </label>
      <Countdown startTime={startTime} />
    </div>
  );
};