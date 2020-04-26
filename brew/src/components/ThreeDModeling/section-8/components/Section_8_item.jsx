import React from 'react';
import PropTypes from 'prop-types';
import './section_8_item.less';

const Section_8_item = (props) => {
  const { photo, name, post } = props;
  return (
    <div className="ThreeDModeling-s8-item">
      <div className="ThreeDModeling-s8-item__photo">
        <img src={photo} alt="Фотография сотрудника" />
      </div>
      <div className="ThreeDModeling-s8-item__name">{name}</div>
      <div className="ThreeDModeling-s8-item__post">{post}</div>
    </div>
  );
};

Section_8_item.propTypes = {
  photo: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  post: PropTypes.string.isRequired,
};

export default Section_8_item;
