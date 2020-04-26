import React from 'react';
import PropTypes from 'prop-types';
import './block_10_item.less';

const Block_10_item = (props) => {
  const { pic } = props;
  return (
    <div
      className="Belaz-b10-item"
      style={{ backgroundImage: `url(${pic})` }}
    />
  );
};

Block_10_item.propTypes = {
  pic: PropTypes.string.isRequired,
};

export default Block_10_item;
