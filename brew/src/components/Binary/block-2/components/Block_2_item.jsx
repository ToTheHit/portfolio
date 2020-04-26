import React from 'react';
import PropTypes from 'prop-types';
import './block_2_item.less';

const Block_2_item = (props) => {
  const { icon, title, text } = props;
  return (
    <div className="Binary-b2-item">
      <div className="Binary-b2-item__logo" style={{ backgroundImage: `url(${icon})` }} />
      <div className="Binary-b2-item__title">{title}</div>
      <div className="Binary-b2-item__text">
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
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Block_2_item;
