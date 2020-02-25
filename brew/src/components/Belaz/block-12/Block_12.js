import React from 'react';
import PropTypes from "prop-types";
import './block_12.less';
import iconCall from "../../../assets/Belaz/block-3/call.svg";

const Block_12 = (props) => {
    return (
        <div className={'Belaz-b12'}>
            <div className="Belaz-b12__content">
                <div className="Belaz-b12__content--title">
                    Если Вам необходима бесплатная консультация по вопросу обслуживания
                </div>
                <div className="Belaz-b12__content--phone">
                    <div className="Belaz-b12__content--phone_text">
                        Звоните нам по телефону:
                    </div>
                    <div className="Belaz-b12__content--phone_number">
                        +7 (818) 247-47-25
                    </div>
                </div>
                <div className="Belaz-b12__content--form">
                    <div className="Belaz-b12__content--form_box">
                        <input className="Belaz-b12__content--form_box-input"
                               placeholder={'Введите ваш телефон'}
                               type={"text"}
                        />
                        <div className="Belaz-b12__content--form_box-icon" dangerouslySetInnerHTML={{__html: iconCall}}/>
                    </div>

                    <div className="Belaz-b12__content--form_button">
                        перезвонить сейчас
                    </div>
                </div>
            </div>
        </div>
    )
};

Block_12.propTypes = {};

export default Block_12;