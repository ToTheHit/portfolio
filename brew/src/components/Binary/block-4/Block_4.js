import React from 'react';
import PropTypes from "prop-types";
import './block_4.less';

import background from '../../../assets/Binary/Background_2.jpg';
import logo1 from '../../../assets/Binary/logo-2.png';
import logo2 from '../../../assets/Binary/archiq.png';
import logo3 from '../../../assets/Binary/thomsoon.png';
import logo4 from '../../../assets/Binary/alex.png';


const Block_4 = (props) => {
    return (
        <section className={'Binary-b4'} style={{backgroundImage: "url(" + background + ")"}}>
            <div className="Binary-b4__title">Out partners</div>
            <div className="Binary-b4__list">
                <div className="Binary-b4__list-item" >
                    <img src={logo1}/>
                </div>
                <div className="Binary-b4__list-item" >
                    <img src={logo2}/>
                </div>
                <div className="Binary-b4__list-item" >
                    <img src={logo3}/>
                </div>
                <div className="Binary-b4__list-item" >
                    <img src={logo4}/>
                </div>
            </div>
        </section>
    )
};

Block_4.propTypes = {};

export default Block_4;