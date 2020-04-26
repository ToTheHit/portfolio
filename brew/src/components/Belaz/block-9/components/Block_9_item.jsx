import React from 'react';
import PropTypes from 'prop-types';
import './block_9_item.less';

const Block_9_item = (props) => {
  const { pic, text } = props;
  return (
    <div className="Belaz-b9-item">
      <div
        className="Belaz-b9-item_picture"
        style={{ backgroundImage: `url(${pic})` }}
      />
      <div className="Belaz-b9-item_text">
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

Block_9_item.propTypes = {
  pic: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Block_9_item;
