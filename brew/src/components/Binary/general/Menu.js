import React from 'react';
import PropTypes from "prop-types";
import './menu.less';

const Binary_menu = (props) => {
    return (
        <div className={'Binary-menu'}>

            <div className="Binary-menu_item" onClick={() => props.setScrollTo(1)}>Home</div>
            <div className="Binary-menu_item" onClick={() => props.setScrollTo(2)}>About us</div>
            <div className="Binary-menu_item" onClick={() => props.setScrollTo(3)}>Portfolio</div>
            <div className="Binary-menu_item" onClick={() => props.setScrollTo(4)}>Contact</div>
        </div>
    )
};

Binary_menu.propTypes = {};

export default Binary_menu;