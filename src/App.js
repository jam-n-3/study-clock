import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">

      <h1 id="title">Study Clock</h1>
      <h3 id="subtitle">Use the pomodoro technique to learn more efficiently!</h3>

      <p id="break-label">Break Length</p>
      <p id="session-label">Session Length</p>

      <p id="break-decrement">&lt;</p>
      <p id="break-length">5</p>
      <p id="break-increment">&gt;</p>

      <p id="session-decrement">&lt;</p>
      <p id="session-length">25</p>
      <p id="session-increment">&gt;</p>

      <p id="timer-label">Session</p>
      <p id="time-left">25:00</p>

      <p id="start_stop">| |</p>
      <p id="reset">(->)</p>

    </div>
  );
}

export default App;
