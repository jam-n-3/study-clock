import React from 'react';
import './App.css';
import {ReactComponent as Pause} from './pause.svg';
import {ReactComponent as Play} from './play.svg';
import {ReactComponent as Repeat} from './repeat.svg';


class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      playing: false,
      minutes: 25,
      seconds: 0,
      session: 25,
      break: 5,
      type: 'Session'
    }

    this.toggle = this.toggle.bind(this);
    this.reset = this.reset.bind(this);
    this.tick = this.tick.bind(this);
    this.setInt = this.setInt.bind(this);
  }

  toggle() {
    if (this.state.playing) {
      this.setState({playing: false});
    }
    else {
      this.setState({playing: true});
    }
  }

  reset() {
    this.setState({playing: false});
    this.setState({minutes: 25});
    this.setState({seconds: 0});
    this.setState({session: 25});
    this.setState({break: 5});
    this.setState({type: 'Session'});
    document.getElementById('beep').pause();
    document.getElementById('beep').currentTime = 0;
  } 

  tick() {
    let s = this.state.seconds;
    let m = this.state.minutes;
    if (this.state.playing) {
      if (s > 0) {
        this.setState({seconds: this.state.seconds - 1});
      }
      else if (m > 0) {
        this.setState({minutes: this.state.minutes - 1});
        this.setState({seconds: 59});
      }
      else {
        let t = this.state.type;
        document.getElementById('beep').play();
        if (t === 'Session') {
          this.setState({type: 'Break'});
          this.setState({minutes: this.state.break});
        }
        else {
          this.setState({type: 'Session'});
          this.setState({minutes: this.state.session});
        }
      }
    }
  }

  setInt(e) {
    let b = this.state.break;
    let s = this.state.session;
    if (!this.state.playing) {
      if (e.target.id === "break-decrement" && b > 1) {
        this.setState({break: b - 1});
      }
      else if (e.target.id === "break-increment" && b < 60) {
        this.setState({break: b + 1});
      }
      else if (e.target.id === "session-decrement" && s > 1) {
        this.setState({session: s - 1});
        this.setState({minutes: s - 1});
      }
      else if (e.target.id === "session-increment" && s < 60) {
        this.setState({session: s + 1});
        this.setState({minutes: s + 1});
      }
    }
  }

  componentDidMount() {
    setInterval(
      this.tick, 1000
    )
  }

  render() {
    const playing = this.state.playing;
    const minutes = this.state.minutes;
    const seconds = this.state.seconds;
    return (
      <div className="App">
  
        <h1 id="title">Study Clock</h1> 
        
        <hr />
  
        <h3 id="subtitle">Use the pomodoro technique to learn more efficiently!</h3> 
        
        <hr />
  
        <p id="break-label" class="pad-r">Break Length</p>
        <p id="session-label" class="pad-l">Session Length</p> 
        
        <hr />
  
        <p id="break-decrement" class="pad-r crs" onClick={this.setInt}>&lt;</p>
        <p id="break-length" class="pad-l pad-r">{this.state.break}</p>
        <p id="break-increment" class="pad-l pad-r crs" onClick={this.setInt}>&gt;</p>
      
        <p id="session-decrement" class="pad-l pad-r crs" onClick={this.setInt}>&lt;</p>
        <p id="session-length" class="pad-l pad-r">{this.state.session}</p>
        <p id="session-increment" class="pad-l crs" onClick={this.setInt}>&gt;</p>
  
        <hr />
  
        <p id="timer-label">{this.state.type}</p>
  
        <hr />
  
        <p id="time-left">{minutes < 10 ? `0${minutes}` : minutes}:{seconds < 10 ? `0${seconds}` : seconds}</p>
  
        <hr />
  
        <p id="start_stop" class="pad-r" onClick={this.toggle}>
          {playing ? (<Pause id="pause"/>) : (<Play id="play"/>)}
        </p>
        <p id="reset" class="pad-l" onClick={this.reset}><Repeat id="repeat" /></p>

        <audio src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"
          id="beep" />
  
      </div>
    );
  }  
}

export default App;
