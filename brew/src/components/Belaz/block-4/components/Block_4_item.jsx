import React from 'react';
import PropTypes from 'prop-types';
import './block_4_item.less';

const Block_4_item = (props) => {
  const { icon, text } = props;
  return (
    <div className="Belaz-b4-item">
      <div className="Belaz-b4-item_icon">{icon}</div>
      <div className="Belaz-b4-item_text">
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

Block_4_item.propTypes = {
  icon: PropTypes.element.isRequired,
  text: PropTypes.string.isRequired,
};

export default Block_4_item;
