import React, {Component} from 'react';

import './block_11.less'


class Block_11 extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.getSectionRef = this.getSectionRef.bind(this);
    }

    getSectionRef(el){
        this.sectionRef = el;
    };

    componentDidMount() {

    }

    render() {
        return (
            <div className={'Advogrand-b11'} ref={this.getSectionRef}>
                <div className="Advogrand-b11_backgroundLeft"/>
                <div className="Advogrand-b11_backgroundRight"/>

                <div className="Advogrand-b11_content">
                    <div className="Advogrand-b11_content--left">
                        <div className="Advogrand-b11_content--left_title">Напишите нам письмо или задайте<br/>свой вопрос</div>
                        <div className="Advogrand-b11_content--left_name">
                            <div className="Advogrand-b11_content--left_name-text">Введите своё имя</div>
                            <input className="Advogrand-b11_content--left_name-form"/>
                        </div>
                        <div className="Advogrand-b11_content--left_phone">
                            <div className="Advogrand-b11_content--left_phone-text">Ваш номер телефона</div>
                            <input className="Advogrand-b11_content--left_phone-form"/>
                        </div>
                        <div className="Advogrand-b11_content--left_message">
                            <div className="Advogrand-b11_content--left_message-text">Введите своё имя</div>
                            <textarea className="Advogrand-b11_content--left_message-form"/>
                        </div>
                        <div className="Advogrand-b11_content--left_button">Заказать звонок консультанта</div>
                        <div className="Advogrand-b11_content--left_recall">Перезвоним вам в течении 5 минут</div>
                    </div>
                    <div className="Advogrand-b11_content--right">
                        <div className="Advogrand-b11_content--right_title">Контакты</div>
                        <div className="Advogrand-b11_content--right_phone">
                            <div className="Advogrand-b11_content--right_phone-text">Телефон для покупки карт:</div>
                            <div className="Advogrand-b11_content--right_phone-number">+7 499 322-85-80</div>
                        </div>
                        <div className="Advogrand-b11_content--right_email">
                            <div className="Advogrand-b11_content--right_email-text">Email:</div>
                            <div className="Advogrand-b11_content--right_email-mail">info@advogrand.net</div>
                        </div>
                        <div className="Advogrand-b11_content--right_time">
                            <div className="Advogrand-b11_content--right_time-text">Время работы:</div>
                            <div className="Advogrand-b11_content--right_time-work">
                                С понедельника по пятницу:<br/>9:00 — 22:00
                                <br/><br/>
                                В праздничные и выходные дни:<br/>
                                только телефонные консультации<br/>
                                10:00 — 20:00
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Block_11;