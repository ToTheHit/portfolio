import React from 'react';
import PropTypes from "prop-types";
import './block_3.less';
import Block_3_background from "../../../assets/Belaz/block-3/background.jpg";
import iconCall from "../../../assets/Belaz/block-3/call.svg";
import iconMail from "../../../assets/Belaz/block-3/mail.svg";
import iconClock from "../../../assets/Belaz/block-3/clock.svg";


const Block_3 = () => {
    return (
        <section className={'Belaz-b3'} style={{backgroundImage: "url(" + Block_3_background + ")"}}>
            <div className="Belaz-b3__content">
                <div className="Belaz-b3__content--title">
                    Получи прайс прямо сейчас на электронную почту!
                </div>
                <div className="Belaz-b3__content--form">
                    <div className="Belaz-b3__content--form_box">
                        <input className="Belaz-b3__content--form_box-input"
                               placeholder={'Введите ваш e-mail'}
                               type={"text"}
                        />
                        <div className="Belaz-b3__content--form_box-icon" dangerouslySetInnerHTML={{__html: iconMail}}/>
                    </div>

                    <div className="Belaz-b3__content--form_box">
                        <input className="Belaz-b3__content--form_box-input"
                               placeholder={'Введите ваш телефон'}
                               type={"text"}
                        />
                        <div className="Belaz-b3__content--form_box-icon" dangerouslySetInnerHTML={{__html: iconCall}}/>
                    </div>
                </div>
                <div className="Belaz-b3__content--getPrice">
                    <div className="Belaz-b3__content--getPrice_description">
                        <div className="Belaz-b3__content--getPrice_description-text">
                            Прайс придет к Вам на почту<br/>в течение 5 минут!
                        </div>
                        <div className="Belaz-b3__content--getPrice_description-clock" dangerouslySetInnerHTML={{__html: iconClock}}/>
                    </div>
                    <div className="Belaz-b3__content--getPrice_button">Получить прайс</div>
                </div>
            </div>
        </section>
    )
};

Block_3.propTypes = {};

export default Block_3;