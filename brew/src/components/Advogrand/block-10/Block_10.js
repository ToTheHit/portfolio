import React, {Component} from 'react';

import './block_10.less'
import pic1 from '../../../assets/Advogrand/block-9/b9-1.jpg';
import pic2 from '../../../assets/Advogrand/block-9/b9-2.jpg';
import pic3 from '../../../assets/Advogrand/block-9/b9-3.jpg';

import Block_10_item from "./components/Block_10_item";

class Block_10 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: [
                {
                    title: 'Персональная карта',
                    cardName: 'для Вас',
                    picture: pic1,
                    listOfServices: ['Устные консультации', 'Консультации в отношении 3-х лиц', 'Письменные консультации', 'Звонок юриста', 'Содействие в переговорах'],
                    listOfTimes: ['2 в месяц', '2 в год', '2 в квартал', '1 в год', '1 в месяц'],
                    cost: '65 $ за год',
                    colors: ['#ff2e00', '#ff4c25']
                },
                {
                    title: 'Карта',
                    cardName: 'для всей семьи',
                    picture: pic2,
                    listOfServices: ['Устные консультации', 'Консультации в отношении 3-х лиц', 'Письменные консультации', 'Звонок юриста', 'Содействие в переговорах', 'Сервис для всей семьи'],
                    listOfTimes: ['2 в месяц', '2 в год', '2 в квартал', '1 в год', '1 в месяц'],
                    cost: '65 $ за год',
                    colors: ['#008e00', '#00a300']
                },
                {
                    title: 'Карта',
                    cardName: 'для бизнеса',
                    picture: pic3,
                    listOfServices: ['Устные консультации', 'Консультации в отношении 3-х лиц', 'Письменные консультации', 'Звонок юриста', 'Содействие в переговорах', 'Бизнес-консультации', 'Рекомендуемая модель договора', 'Обзор изменения в законодательстве'],
                    listOfTimes: ['2 в месяц', '2 в год', '2 в квартал', '1 в год', '1 в месяц'],
                    cost: '65 $ за год',
                    colors: ['#ff2e00', '#ff4c25']
                }
            ],
            renderedCards: []
        };
        this.getSectionRef = this.getSectionRef.bind(this);
    }

    getSectionRef(el){
        this.sectionRef = el;
    };

    componentDidMount() {
        let renderedCards = this.state.cards.map(card => {
            return <Block_10_item
                        key={Math.random()}
                        title={card.title}
                        cardName={card.cardName}
                        picture={card.picture}
                        listOfServices={card.listOfServices}
                        listOfTimes={card.listOfTimes}
                        cost={card.cost}
                        colors={card.colors}
                    />
        });
        this.setState({renderedCards: renderedCards});
    }

    render() {
        return (
            <section className={'Advogrand-b10'} ref={this.getSectionRef}>
                <div className="Advogrand-b10_content">
                    <div className="Advogrand-b10_content--title">Выберите тариф</div>
                    <div className="Advogrand-b10_content--description">
                        Вы можете оформить карту и начать пользоваться услугами уже сейчас!<br/>
                        Оформление займёт всего 10 минут
                    </div>
                    <div className="Advogrand-b10_content--takeCard">
                        <div className="Advogrand-b10_content--takeCard_left">Выберите годовую карту, которая Вам подходит:</div>
                        <div className="Advogrand-b10_content--takeCard_right">
                            <div className="Advogrand-b10_content--takeCard_right--item">
                                Сравнить тарифы
                            </div>
                            <div className="Advogrand-b10_content--takeCard_right--item_active">
                                Тарифы
                            </div>
                        </div>
                    </div>

                    <div className="Advogrand-b10_content--cards">
                        {this.state.renderedCards}
                    </div>
                </div>
            </section>
        )
    }
}

export default Block_10;