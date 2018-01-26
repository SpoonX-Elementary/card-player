import React from 'react';
import PropTypes from 'prop-types';

export default class CardPlayer extends React.Component {
  render() {
    const { source, controls, style, poster } = this.props;

    return (
      <video controls={controls} style={style} poster={poster}>
        <source src={source} type="video/mp4" />
      </video>
    );
  }
}

CardPlayer.propTypes = {
  source  : PropTypes.any.isRequired,
  controls: PropTypes.bool,
  style   : PropTypes.object,
  poster  : PropTypes.string,
};

CardPlayer.defaultProps = {
  controls: true,
  style   : {},
  poster  : null,
};
