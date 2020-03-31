import React, {forwardRef} from 'react';
import PropTypes from "prop-types";
import './block_9.less';
import logo from "../../../assets/Bicycle/block-1/Logo.png";

const Block_9 = forwardRef((props,ref) => {
    return (
        <section className={'Bicycle-b9'} ref={ref}>
            <div className="Bicycle-b9__logo" style={{backgroundImage: "url(" + logo + ")"}}/>
            <div className="Bicycle-b9__title">Stay on saddle!</div>
            <div className="Bicycle-b9__form">

                <div className="Bicycle-b9__form-box">
                    <input className="Bicycle-b9__form-box-input"
                           placeholder={'enter your email...'}
                           type={"text"}
                    />
                </div>

                <button className="Bicycle-b9__form-submit">GO</button>
            </div>
        </section>
    )
});

Block_9.propTypes = {};

export default Block_9;