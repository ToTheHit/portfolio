import React, {Component} from 'react';

import './block_3.less'


class Block_3 extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {

    }

    render() {
        return(
            <section className={'bodyShop-b3'}>
                <div className="bodyShop-b3--title">Подробная заявка</div>
                <div className="bodyShop-b3--description">Заполните форму и получите максимально точную цену!</div>
                <div className="bodyShop-b3--form">
                    <div className="bodyShop-b3--form_column">
                        <div className="bodyShop-b3--form_column--input">
                            <div className="bodyShop-b3--form_column--input_title">Марка:</div>
                            <div className="bodyShop-b3--form_column--input_selector">
                                <div className="bodyShop-b3--form_column--input_selector-placeholder">Выберите марку</div>
                                <div className="bodyShop-b3--form_column--input_selector-arrow">▼</div>
                            </div>
                        </div>
                        <div className="bodyShop-b3--form_column--input" style={{paddingTop: '20px'}}>
                            <div className="bodyShop-b3--form_column--input_title">Модель:</div>
                            <div className="bodyShop-b3--form_column--input_selector">
                                <div className="bodyShop-b3--form_column--input_selector-placeholder">Выберите модель</div>
                                <div className="bodyShop-b3--form_column--input_selector-arrow">▼</div>

                            </div>
                        </div>
                        <div className="bodyShop-b3--form_column--input" style={{paddingTop: '20px'}}>
                            <div className="bodyShop-b3--form_column--input_title">Год выпуска:</div>
                            <div className="bodyShop-b3--form_column--input_selector">
                                <div className="bodyShop-b3--form_column--input_selector-placeholder">Выберите год</div>
                                <div className="bodyShop-b3--form_column--input_selector-arrow">▼</div>

                            </div>
                        </div>
                    </div>
                    <div className="bodyShop-b3--form_column">
                        <div className="bodyShop-b3--form_column--input">
                            <div className="bodyShop-b3--form_column--input_title">Необходимые детали:</div>
                            <textarea className="bodyShop-b3--form_column--input_textArea" style={{height: '110px'}} placeholder={'Введите'}/>
                        </div>
                        <div className="bodyShop-b3--form_column--input" style={{paddingTop: '20px'}}>
                            <div className="bodyShop-b3--form_column--input_title">Ваше имя:</div>
                            <input className="bodyShop-b3--form_column--input_text" style={{height: '40px'}} placeholder={'Введите'}/>
                        </div>
                    </div>
                    <div className="bodyShop-b3--form_column">
                        <div className="bodyShop-b3--form_column--input">
                            <div className="bodyShop-b3--form_column--input_title">Ваш телефон:</div>
                            <input className="bodyShop-b3--form_column--input_text" style={{height: '40px'}} placeholder={'Введите'}/>
                        </div>
                        <div className="bodyShop-b3--form_column--input" style={{paddingTop: '20px'}}>
                            <div className="bodyShop-b3--form_column--input_title">Ваш e-mail:</div>
                            <input  className="bodyShop-b3--form_column--input_text" style={{height: '40px'}} placeholder={'Введите'}/>
                        </div>
                        <div className="bodyShop-b3--form_column--button">Узнать цену</div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Block_3;