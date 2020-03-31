import React from 'react';
import PropTypes from "prop-types";
import './block_14.less';

import logo from '../../../assets/Belaz/block-14/logo.png';

const Block_14 = (props) => {
    return (
        <footer className={'Belaz-b14'}>
            <div className="Belaz-b14__content">
                <div className="Belaz-b14__content--logo" style={{backgroundImage: "url(" + logo + ")"}}/>
                <div className="Belaz-b14__content--question">
                    <div className="Belaz-b14__content--question_text">Есть вопросы? Звоните!</div>
                    <div className="Belaz-b14__content--question_phone">+7 (818) 247-47-25</div>
                </div>
            </div>
        </footer>
    )
};

Block_14.propTypes = {};

export default Block_14;