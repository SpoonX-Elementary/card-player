import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import './App.css';
import Annotation from './components/Annotation';
import CardPlayer from './components/CardPlayer';
import { hideCard, setInstructions, changeUrl, setCardAsSeen } from './actions';

import video from './assets/demo-video.mp4';
const poster = 'https://peach.blender.org/wp-content/uploads/bbb-splash.png?x11217';

class App extends Component {
  componentDidMount() {
    ReactDOM.findDOMNode(this.player).addEventListener('timeupdate', this.updateCurrentTime);
  }

  updateCurrentTime = (e) => {
    const currentTime  = Math.floor(e.srcElement.currentTime);
    const instructionsExist = this.props.instructions[currentTime] && !this.props.instructions[currentTime].seen;

    if (instructionsExist) {
      ReactDOM.findDOMNode(this.player).pause();

      this.props.hideCard(false);
      this.props.seenCard(currentTime);
    }
  };

  playerRef = node => {
    this.player = node;
  };

  handleHideCard = e => {
    this.props.hideCard(true);

    ReactDOM.findDOMNode(this.player).play();
  };

  onFormChange = e => {
    e.preventDefault();

    this.props.changeUrl(e.target.value);
  };

  onFormSubmit = e => {
    e.preventDefault();

    fetch(this.props.url)
      .then(response => response.json())
      .then((instructions) => this.props.setInstructions(instructions));
  };

  render() {
    const { isCardHidden, url } = this.props;

    return (
      <div className="App">
        <div className="videoContainer">
          <CardPlayer ref={this.playerRef} controls={isCardHidden} source={video} poster={poster} />

          <Annotation hidden={isCardHidden} hideCard={this.handleHideCard} />
        </div>
        <div className="form">
          <form onSubmit={this.onFormSubmit}>
            <label>
              Instructions URL:
              <input type="text" value={url} onChange={this.onFormChange} />
            </label>
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    );
  }

  componentWillUnmount() {
    ReactDOM.findDOMNode(this.player).removeEventListener('timeupdate', this.updateCurrentTime);
  }
}

const mapDispatchToProps = dispatch => ({
  hideCard: hidden => dispatch(hideCard(hidden)),
  setInstructions: instructions => dispatch(setInstructions(instructions)),
  changeUrl: url => dispatch(changeUrl(url)),
  seenCard: time => dispatch(setCardAsSeen(time))
});

const mapStateToProps = state => ({
  instructions: state.main.instructions,
  hideCard: state.main.hideCard,
  url: state.main.url,
  currentTime: state.main.currentTime,
  isCardHidden: state.main.isCardHidden
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
