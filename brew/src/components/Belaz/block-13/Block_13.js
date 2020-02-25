import React from 'react';
import PropTypes from "prop-types";
import './block_13.less';
import background1 from '../../../assets/Belaz/block-13/background1.png'
import background2 from '../../../assets/Belaz/block-13/background2.png'

const Block_13 = (props) => {
    return (
        <div>
            <div className={'Belaz-b13'} style={{backgroundImage: "url(" + background1 + ")"}}>
                <div className="Belaz-b13__content">
                    <div className="Belaz-b13__content--title">
                        Приезжайте в наш офис!
                    </div>
                    <div className="Belaz-b13__content--info">
                        <div className="Belaz-b13__content--info_address">г. Архангельск, Москва-Сити, оф. 3725</div>
                        <div className="Belaz-b13__content--info_phone">+7 (818) 247-47-25</div>
                    </div>
                </div>
            </div>
            <div className="Belaz-b13__map" style={{backgroundImage: "url(" + background2 + ")"}}/>
        </div>
    )
};

Block_13.propTypes = {};

export default Block_13;