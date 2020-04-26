import React from 'react';
import PropTypes from 'prop-types';
import './block_2_item.less';

const Block_2_item = (props) => {
  const { icon, text } = props;
  return (
    <div className="Belaz-b2_item">
      <div className="Belaz-b2_item--icon" style={{ backgroundImage: `url(${icon})` }} />
      <div className="Belaz-b2_item--text">
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

Block_2_item.propTypes = {
  icon: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Block_2_item;
