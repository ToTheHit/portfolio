import React, { Component } from 'react';

import './block_10_item_list.less';
import PropTypes from 'prop-types';

class Block_10_item_list extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { extra, service, time } = this.props;
    return (
      <div className="Advogrand-b10_item_list">
        <div
          className="Advogrand-b10_item_list--service"
          style={{ fontSize: (extra ? '13px' : '') }}
        >
          <div className="Advogrand-b10_item_list--service_content">
            {service}
          </div>
        </div>
        <div className="Advogrand-b10_item_list--time">{time}</div>
      </div>
    );
  }
}

Block_10_item_list.propTypes = {
  service: PropTypes.string,
  time: PropTypes.string,
  extra: PropTypes.bool,
};

Block_10_item_list.defaultProps = {
  service: '',
  time: '',
  extra: false,
};

export default Block_10_item_list;
