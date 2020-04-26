import React from 'react';
import PropTypes from 'prop-types';
import './bicycle_textBlock.less';

const BicycleTextBlock = (props) => {
  const {
    icon, title, text, textStyle,
  } = props;
  return (
    <div className="Bicycle-textBlock">
      <div
        className="Bicycle-textBlock__icon"
        style={{ backgroundImage: `url(${icon})` }}
      />
      <div className="Bicycle-textBlock__title">{title}</div>
      <div className="Bicycle-textBlock__text" style={textStyle}>{text}</div>
      <div className="Bicycle-textBlock__line" />
    </div>
  );
};

BicycleTextBlock.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  textStyle: PropTypes.shape({
    textAlign: PropTypes.string,
  }),
};

BicycleTextBlock.defaultProps = {
  textStyle: {
    textAlign: 'center',
  },
};

export default BicycleTextBlock;
