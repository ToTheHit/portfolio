import React, {forwardRef} from 'react';

import PropTypes from "prop-types";
import './block_1.less';
import background from "../../../assets/Bicycle/block-1/background.jpg";
import logo from "../../../assets/Bicycle/block-1/Logo.png";


const Block_1 = forwardRef((props, ref) => {
    return (
        <header className={'Bicycle-b1'} ref={ref} style={{backgroundImage: "url(" + background + ")"}}>
            <div className="Bicycle-b1__menu">
                <div className="Bicycle-b1__menu-left">
                    <div className="Bicycle-b1__menu-left--item" onClick={() => {props.setScrollTo(1)}}>about us</div>
                    <div className="Bicycle-b1__menu-left--item point"/>
                    <div className="Bicycle-b1__menu-left--item" onClick={() => props.setScrollTo(2)}>work</div>
                </div>
                <div className="Bicycle-b1__menu-middle" style={{backgroundImage: "url(" + logo + ")"}}/>
                <div className="Bicycle-b1__menu-right">
                    <div className="Bicycle-b1__menu-right--item" onClick={() => props.setScrollTo(3)}>shop</div>
                    <div className="Bicycle-b1__menu-right--item point"/>
                    <div className="Bicycle-b1__menu-right--item" onClick={() => props.setScrollTo(4)}>contact</div>
                </div>
            </div>
            <div className="Bicycle-b1__arrow" onClick={() => {props.setScrollTo(1)}}/>
        </header>
    )
});

Block_1.propTypes = {};

export default Block_1;