import React from 'react';
import PropTypes from 'prop-types';
import './block_7_item.less';

const Block_7_item = (props) => {
  const { circleContent, text } = props;
  return (
    <div className="Belaz-b7-item">
      <div className="Belaz-b7-item--circle">
        {circleContent.text}
        <div
          className="Belaz-b7-item--circle_icon"
          style={{ display: (!circleContent.icon ? 'none' : null) }}
        >
          {circleContent.icon}
        </div>
      </div>
      <div className="Belaz-b7-item--text">
        {
          text.split('<br/>').map((item) => (
            <span key={Math.random()}>
              {item}
              <br />
            </span>
          ))
        }
      </div>
    </div>
  );
};

Block_7_item.propTypes = {
  circleContent: PropTypes.shape({
    text: PropTypes.string,
    icon: PropTypes.element,
  }).isRequired,
  text: PropTypes.string.isRequired,
};

export default Block_7_item;
