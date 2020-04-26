import React, { Component } from 'react';

import './block_4_item.less';
import PropTypes from 'prop-types';

class Block_4_item extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { picture, title, description } = this.props;
    return (
      <div className="granit-b4--line_item">
        <div
          className="granit-b4--line_item-picture"
          style={{ backgroundImage: `url(${picture})` }}
        />
        <div className="granit-b4--line_item-title">{title}</div>
        <div className="granit-b4--line_item-description">{description}</div>
      </div>
    );
  }
}

Block_4_item.propTypes = {
  picture: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Block_4_item;
