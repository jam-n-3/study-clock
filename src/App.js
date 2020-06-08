import React from 'react';
import './App.css';
import {ReactComponent as Pause} from './pause.svg';
import {ReactComponent as Play} from './play.svg';
import {ReactComponent as Repeat} from './repeat.svg';


function App() {
  return (
    <div className="App">

      <h1 id="title">Study Clock</h1> 
      
      <hr />

      <h3 id="subtitle">Use the pomodoro technique to learn more efficiently!</h3> 
      
      <hr />

      <p id="break-label" class="pad-r">Break Length</p>
      <p id="session-label" class="pad-l">Session Length</p> 
      
      <hr />

      <p id="break-decrement" class="pad-r">&lt;</p>
      <p id="break-length" class="pad-l pad-r">5</p>
      <p id="break-increment" class="pad-l pad-r">&gt;</p>
    
      <p id="session-decrement" class="pad-l pad-r">&lt;</p>
      <p id="session-length" class="pad-l pad-r">25</p>
      <p id="session-increment" class="pad-l">&gt;</p>

      <hr />

      <p id="timer-label">Session</p>

      <hr />

      <p id="time-left">25:00</p>

      <hr />

      <p id="start_stop"><Pause id="pause"/><Play id="play"/></p>
      <p id="reset"><Repeat id="repeat" /></p>

    </div>
  );
}

export default App;
