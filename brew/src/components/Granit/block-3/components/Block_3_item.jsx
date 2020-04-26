import React, { Component } from 'react';

import './block_3_item.less';
import PropTypes from 'prop-types';

class Block_3_item extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      picture, title, description, cost,
    } = this.props;
    return (
      <div className="granit-b3--line_item">
        <div className="granit-b3--line_item-picture" style={{ backgroundImage: `url(${picture})` }} />
        <div className="granit-b3--line_item-title">{title}</div>
        <div className="granit-b3--line_item-description">{description}</div>
        <div className="granit-b3--line_item-cost">{cost}</div>
        <div className="granit-b3--line_item-button">Подробнее</div>
      </div>
    );
  }
}

Block_3_item.propTypes = {
  picture: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  cost: PropTypes.string.isRequired,
};

export default Block_3_item;
