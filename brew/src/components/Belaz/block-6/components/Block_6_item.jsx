import React from 'react';
import PropTypes from 'prop-types';
import './block_6_item.less';

const Block_6_item = (props) => {
  const { image, text } = props;
  return (
    <div className="Belaz-b6-item">
      <div
        className="Belaz-b6-item_image"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="Belaz-b6-item_text">
        {
          text.split('<br/>').map((item) => (
            <span key={Math.random()}>
              {item}
              <br />
            </span>
          ))
        }
      </div>
      <div className="Belaz-b6-item_details">Подробнее</div>
    </div>
  );
};

Block_6_item.propTypes = {
  image: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Block_6_item;
