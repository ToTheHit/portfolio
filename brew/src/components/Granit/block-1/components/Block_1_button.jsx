import React, { Component } from 'react';

import './block_1_button.less';
import PropTypes from 'prop-types';

class Block_1_button extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { text } = this.props;
    return (
      <div className="granit-b1_l2-button">
        {text}
      </div>
    );
  }
}

Block_1_button.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Block_1_button;
