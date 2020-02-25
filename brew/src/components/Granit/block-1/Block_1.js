import React, {Component} from 'react';
import logo from "../../../assets/Granit/block-1/b1_logo.png";

import './block_1.less'
import Block_1_button from "./components/Block_1_button";
import Block_1_logo from "./components/Block_1_logo";
import Block_3_item from "../block-3/components/Block_3_item";

class Block_1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            buttonsText: [
                "Главная",
                "Каталог",
                "Услуги",
                "Доставка",
                "О компании",
                "Контакты"
            ],
            buttons: []
        }
    }

    componentDidMount() {
        let buttons = this.state.buttonsText.map(text => {
            return (
                <Block_1_button
                    key={Math.random()}
                    text={text}
                />
            )
        });
        this.setState({buttons: buttons});

    }

    render() {
        return(
            <div className={'granit-b1'}>
                <div className={'granit-b1_l1'}>
                    <Block_1_logo
                        picture={logo}
                    />

                    <div className={'granit-b1_l1--call'}>
                        <div className="granit-b1_l1--call_number">
                            <div className="granit-b1_l1--call_number_telephone">8 800 342-13-33</div>
                            <div className="granit-b1_l1--call_number_text">Бесплатный звонок по России</div>
                        </div>

                        <div className="granit-b1_l1--call_button">
                            Обратный звонок
                        </div>
                    </div>
                </div>

                <div className={'granit-b1_l2'}>
                    {this.state.buttons}
                </div>
            </div>
        )
    }
}

export default Block_1;