import React, { Component } from 'react';

import './block_9_item.less';
import PropTypes from 'prop-types';

class Block_9_item extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { description, picture } = this.props;
    return (
      <div className="Advogrand-b9_item">

        <Hover onHover={(
          <div className="Advogrand-b9_item--description">
            <div className="Advogrand-b9_item--description_text">
              {description}
            </div>
          </div>
        )}
        >
          <div
            className="Advogrand-b9_item--picture"
            style={{ backgroundImage: `url(${picture})` }}
          />
        </Hover>
      </div>
    );
  }
}

const Hover = ({ onHover, children }) => (
  <div className="Advogrand-b9_item-hover">
    <div className="Advogrand-b9_item-hover__no-hover">{children}</div>
    <div className="Advogrand-b9_item-hover__hover">{onHover}</div>
  </div>
);

Hover.propTypes = {
  onHover: PropTypes.element.isRequired,
  children: PropTypes.element.isRequired,
};

Block_9_item.propTypes = {
  picture: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Block_9_item;
