import React from 'react';
import PropTypes from 'prop-types';
import './threeDModeling_title.less';

const ThreeDModelingTitle = (props) => {
  const { title, subtitle } = props;
  return (
    <div className="ThreeDModeling_title">
      <h2 className="ThreeDModeling_title--first">
        {title}
      </h2>
      <div className="ThreeDModeling_title--second" style={{ display: (!subtitle ? 'none' : 'block') }}>
        {subtitle}
      </div>
    </div>
  );
};

ThreeDModelingTitle.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
};

ThreeDModelingTitle.defaultProps = {
  title: '',
  subtitle: '',
};

export default ThreeDModelingTitle;
