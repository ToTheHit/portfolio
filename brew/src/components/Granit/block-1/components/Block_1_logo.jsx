import React, { Component } from 'react';

import './block_1_logo.less';
import PropTypes from 'prop-types';

class Block_1_logo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { picture, titleStyle, textStyle } = this.props;
    return (
      <div className="granit-b1_l1--logo">
        <div
          className="granit-b1_l1--logo_picture"
          style={{ backgroundImage: `url(${picture})` }}
        />
        <div className="granit-b1_l1--logo_text">
          <div className="granit-b1_l1--logo_text_title" style={titleStyle}>granit</div>
          <div className="granit-b1_l1--logo_text_about" style={textStyle}>
            Доставка нерудных материалов
          </div>
        </div>
      </div>
    );
  }
}

Block_1_logo.propTypes = {
  picture: PropTypes.string,
  titleStyle: PropTypes.objectOf(PropTypes.string),
  textStyle: PropTypes.objectOf(PropTypes.string),
};

Block_1_logo.defaultProps = {
  picture: '',
  titleStyle: {},
  textStyle: {},
};

export default Block_1_logo;
