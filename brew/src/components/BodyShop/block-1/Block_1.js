import React, {Component} from 'react';

import './block_1.less'
import background from '../../../assets/BodyShop/block-1/b1-background.jpg';
import icon1 from '../../../assets/BodyShop/block-1/b1-pic1.png';
import icon2 from '../../../assets/BodyShop/block-1/b1-pic2.png';
import icon3 from '../../../assets/BodyShop/block-1/b1-pic3.png';
import Block_1_item from "./components/Block_1_item";


class Block_1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            icons: [
                {
                    picture: icon1,
                    description: "Доставка по РФ от 3-х дней"
                },
                {
                    picture: icon2,
                    description: "Новое состояние по цене б/у"
                },
                {
                    picture: icon3,
                    description: "Наличие более 500 различных деталей"
                }
            ],
            items: []
        }
    }

    componentDidMount() {
        let items = this.state.icons.map(icon => {
            return <Block_1_item
                key={Math.random()}
                picture={icon.picture}
                description={icon.description}
            />
        });
        this.setState({items: items});
    }

    render() {
        return(
            <header className={'bodyShop-b1'} style={{backgroundImage: "url(" + background + ")"}}>
                <div className="bodyShop-b1_topBar">
                    <div className="bodyShop-b1_topBar-left">ЛОГОТИП</div>
                    <div className="bodyShop-b1_topBar-right">
                        <div className="bodyShop-b1_topBar-right--phone">8 800 232 32 12</div>
                        <div className="bodyShop-b1_topBar-right--text">Заказать обратный звонок</div>
                    </div>
                </div>
                <div className="bodyShop-b1_title">
                    <div className="bodyShop-b1_title--firstLine">продажа кузовных запчастей</div>
                    <div className="bodyShop-b1_title--secondLine">с заводской покраской без пробега по РФ</div>
                </div>
                <div className="bodyShop-b1_icons">
                    {this.state.items}
                </div>
                <div className="bodyShop-b1_buttons">
                    <div className="bodyShop-b1_buttons--left">
                        <div className="bodyShop-b1_buttons--left_button">Быстрая заявка</div>
                        <div className="bodyShop-b1_buttons--left_text">Мы перезвоним Вам для уточнения деталей</div>
                    </div>
                    <div className="bodyShop-b1_buttons--right">
                        <div className="bodyShop-b1_buttons--right_button">Подробная заявка</div>
                        <div className="bodyShop-b1_buttons--right_text">Заполните подробную заявку онлайн!</div>
                    </div>
                </div>
            </header>
        )
    }
}

export default Block_1;