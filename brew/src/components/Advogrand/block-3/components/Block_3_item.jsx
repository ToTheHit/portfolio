import React, { Component } from 'react';

import './block_3_item.less';
import PropTypes from 'prop-types';

// import SVG from 'react-inlinesvg';

class Block_3_item extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { picture, description } = this.props;
    return (
      <div className="Advogrand_block_3_item">
        <span className="Advogrand_block_3_item--pic">
          {picture}
          {/* <SVG src={picture} /> */}
          {/*<img src={picture} alt="Картинка под описание услуги" />*/}
        </span>
        <div className="Advogrand_block_3_item--description">
          {
            description.split('<br/>').map((item) => (
              <span key={Math.random()}>
                {item}
                <br />
              </span>
            ))
          }
        </div>
      </div>
    );
  }
}

Block_3_item.propTypes = {
  picture: PropTypes.element.isRequired,
  description: PropTypes.string.isRequired,
};

export default Block_3_item;
