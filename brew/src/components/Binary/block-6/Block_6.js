import React from 'react';
import PropTypes from "prop-types";
import './block_6.less';

import logo from '../../../assets/Binary/layer-33-copy-3.png';

const Block_6 = (props) => {
    return (
        <footer className={'Binary-b6'}>
            <div className="Binary-b6__logo">
                <img src={logo}/>
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
    )
};

Block_6.propTypes = {};

export default Block_6;