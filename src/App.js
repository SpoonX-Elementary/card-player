import React, { Component } from 'react';
import './App.css';
import CardPlayer from './components/CardPlayer';

import video from './assets/demo-video.mp4';
const poster = 'https://peach.blender.org/wp-content/uploads/bbb-splash.png?x11217';

class App extends Component {
  render() {
    return (
      <div className="App">
        <CardPlayer source={video} poster={poster} />
      </div>
    );
  }
}

export default App;
