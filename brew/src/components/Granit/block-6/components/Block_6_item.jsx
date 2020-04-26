import React, { Component } from 'react';

import './block_6_item.less';
import PropTypes from 'prop-types';

class Block_6_item extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { picture, title } = this.props;
    return (
      <div className="granit-b6--line_item">
        <div
          className="granit-b6--line_item-picture"
          style={{ backgroundImage: `url(${picture})` }}
        />
        <div className="granit-b6--line_item-title">{title}</div>
      </div>
    );
  }
}

Block_6_item.propTypes = {
  picture: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Block_6_item;
