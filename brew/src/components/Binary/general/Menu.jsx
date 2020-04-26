import React from 'react';
import './menu.less';
import propTypes from 'prop-types';

const BinaryMenu = (props) => {
  const { setScrollTo } = props;
  return (
    <div className="Binary-menu">
      <button type="button" className="Binary-menu_item" onClick={() => setScrollTo(1)}>
        Home
      </button>
      <button type="button" className="Binary-menu_item" onClick={() => setScrollTo(2)}>
        About us
      </button>
      <button type="button" className="Binary-menu_item" onClick={() => setScrollTo(3)}>
        Portfolio
      </button>
      <button type="button" className="Binary-menu_item" onClick={() => setScrollTo(4)}>
        Contact
      </button>
    </div>
  );
};

BinaryMenu.propTypes = {
  setScrollTo: propTypes.func.isRequired,
};

export default BinaryMenu;
