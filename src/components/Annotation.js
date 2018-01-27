import React from 'react';
import PropTypes from 'prop-types';
import './Annotation.css';

export default class Annotation extends React.Component {
  render() {
    return this.props.hidden
      ? null
      : (
        <div className="cardContainer">
          <a className="exit" onClick={this.props.hideCard}>Close</a>
        </div>
      );
  }
}

Annotation.propTypes = {
  hidden: PropTypes.bool,
  hideCard: PropTypes.func.isRequired
};

Annotation.defaultProps = {
  hidden: false
};

