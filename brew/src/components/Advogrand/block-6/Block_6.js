import React, {Component} from 'react';

import './block_6.less'
import pic1 from '../../../assets/Advogrand/block-5/b5-1.png'
import pic2 from '../../../assets/Advogrand/block-5/b5-2.png'
import pic3 from '../../../assets/Advogrand/block-5/b5-3.png'
import pic4 from '../../../assets/Advogrand/block-5/b5-4.png'

class Block_6 extends Component {
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
            <section className={'Advogrand-b6'} ref={this.getSectionRef}>
                <div className="Advogrand-b6_title">Преимущество сервиса Advogrand<br/>по сравнению с другими юридическими компаниями</div>
                <div className="Advogrand-b6_table">
                    <div className="Advogrand-b6_table--column_1">
                        <div className="Advogrand-b6_table--column_1--item">Одна консультация</div>
                        <div className="Advogrand-b6_table--column_1--item">Дополнительные услуги</div>
                        <div className="Advogrand-b6_table--column_1--item">Решение вопроса</div>
                        <div className="Advogrand-b6_table--column_1--item">Время работы</div>
                        <div className="Advogrand-b6_table--column_1--item">Оплата</div>
                    </div>
                    <div className="Advogrand-b6_table--column_2">
                        <div className="Advogrand-b6_table--column_2--item" style={{fontSize: '14px'}}><b>Advogrand</b></div>
                        <div className="Advogrand-b6_table--column_2--item">От 120 руб</div>
                        <div className="Advogrand-b6_table--column_2--item">Входят в абонемент</div>
                        <div className="Advogrand-b6_table--column_2--item">По телефону</div>
                        <div className="Advogrand-b6_table--column_2--item">Круглосуточно</div>
                        <div className="Advogrand-b6_table--column_2--item">Всего 1 раз в год</div>
                    </div>
                    <div className="Advogrand-b6_table--column_3">
                        <div className="Advogrand-b6_table--column_3--item" style={{fontSize: '14px'}}><b>Юридические компании</b></div>
                        <div className="Advogrand-b6_table--column_3--item">Более 1000 руб</div>
                        <div className="Advogrand-b6_table--column_3--item">Оплачивается отдельно</div>
                        <div className="Advogrand-b6_table--column_3--item">В офисе</div>
                        <div className="Advogrand-b6_table--column_3--item">С 9:00 до 18:00</div>
                        <div className="Advogrand-b6_table--column_3--item">Каждый раз при обращении</div>
                    </div>
                    <div className="Advogrand-b6_table--column_4">
                        <div className="Advogrand-b6_table--column_4--item" style={{fontSize: '16px'}}><b>Нашими услугами пользуются:</b></div>
                        <div className="Advogrand-b6_table--column_4--item">
                            <div className="Advogrand-b6_table--column_4--item_pic" style={{backgroundImage: "url(" + pic1 + ")"}}/>
                            <div className="Advogrand-b6_table--column_4--item_text"><b>208 000</b> - мужчин</div>
                        </div>
                        <div className="Advogrand-b6_table--column_4--item">
                            <div className="Advogrand-b6_table--column_4--item_pic" style={{backgroundImage: "url(" + pic2 + ")"}}/>
                            <div className="Advogrand-b6_table--column_4--item_text"><b>137 000</b> - женщин</div>
                        </div>
                        <div className="Advogrand-b6_table--column_4--item">
                            <div className="Advogrand-b6_table--column_4--item_pic" style={{backgroundImage: "url(" + pic3 + ")"}}/>
                            <div className="Advogrand-b6_table--column_4--item_text"><b>63 000</b> - семейных пар</div>
                        </div>
                        <div className="Advogrand-b6_table--column_4--item">
                            <div className="Advogrand-b6_table--column_4--item_pic" style={{backgroundImage: "url(" + pic4 + ")"}}/>
                            <div className="Advogrand-b6_table--column_4--item_text"><b>13 500</b> - предпринимателей</div>
                        </div>
                        <div className="Advogrand-b6_table--column_4--button">Узнать больше!</div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Block_6;