import React, { Component } from 'react';
import './App.css';
import video from './assets/demo-video.mp4';

class App extends Component {
  render() {
    return (
      <div className="App">
        <video controls>
          <source src={video} type="video/mp4" />
        </video>
      </div>
    );
  }
}

export default App;
