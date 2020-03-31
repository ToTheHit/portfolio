import React from 'react';
import PropTypes from "prop-types";
import './block_5.less';

import photo1 from "../../../assets/Bicycle/block-5/bicycle-left.jpg";
import photo2 from "../../../assets/Bicycle/block-5/bicycle-right.jpg";
import photo3 from "../../../assets/Bicycle/block-5/bicycle-middle.jpg";
import logo from "../../../assets/Bicycle/block-5/Logo.png";
import icon from "../../../assets/Bicycle/block-5/Icon.png";
import Bicycle_textBlock from "../general/Bicycle_textBlock";


const Block_5 = (props) => {
    return (
        <section className={'Bicycle-b5'}>
            <div className="Bicycle-b5__left" style={{backgroundImage: "url(" + photo1 + ")"}}>
                <div className="Bicycle-b5__left-logo" style={{backgroundImage: "url(" + logo + ")"}}/>
            </div>

            <div className="Bicycle-b5__center">
                <Bicycle_textBlock
                    icon={icon}
                    title={'retrò Bike - M. Hulot'}
                    text={' Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived.'}
                    textStyle={{textAlign: 'justify'}}
                />
                <div className="Bicycle-b5__center--photo1" style={{backgroundImage: "url(" + photo2 + ")"}}/>
            </div>

            <div className="Bicycle-b5__right" style={{backgroundImage: "url(" + photo3 + ")"}}/>
        </section>
    )
};

Block_5.propTypes = {};

export default Block_5;