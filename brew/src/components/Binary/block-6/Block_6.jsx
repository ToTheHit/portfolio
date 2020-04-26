import React from 'react';
import './block_6.less';

import logo from '../../../assets/Binary/layer-33-copy-3.png';

const Block_6 = () => (
  <footer className="Binary-b6">
    <div className="Binary-b6__logo">
      <img src={logo} alt="Binary logo" />
    </div>
    <div className="Binary-b6__list">
      <div className="Binary-b6__link">Home</div>
      <div className="Binary-b6__link">Facebook</div>
      <div className="Binary-b6__link">Linkedin</div>
      <div className="Binary-b6__link">Contact</div>
    </div>
    <div className="Binary-b6__copyright">
      © 2020. All Rights Reserved
    </div>
  </footer>
);

Block_6.propTypes = {};

export default Block_6;
