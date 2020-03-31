import React, {Component} from 'react';

import './block_1.less'
import logo from '../../../assets/Advogrand/block-0/b0-logo.png'
import android from '../../../assets/Advogrand/block-0/b0-android.png'
import apple from '../../../assets/Advogrand/block-0/b0-apple.png'

class Block_1 extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {

    }

    render() {
        return (
            <header className={'advogrand-b1'}>
                <div className="advogrand-b1_firstLine">
                    <div className="advogrand-b1_firstLine_menu">
                        <div className="advogrand-b1_firstLine_menu--phone">+7 499 322-85-80</div>
                        <div className="advogrand-b1_firstLine_menu--button" onClick={() => this.props.scrollTo(1)}>Как мы работаем</div>
                        <div className="advogrand-b1_firstLine_menu--button" onClick={() => this.props.scrollTo(2)}>Преимущества</div>
                        <div className="advogrand-b1_firstLine_menu--button" onClick={() => this.props.scrollTo(3)}>Отзывы</div>
                        <div className="advogrand-b1_firstLine_menu--button" onClick={() => this.props.scrollTo(4)}>Тарифы</div>
                        <div className="advogrand-b1_firstLine_menu--button" onClick={() => this.props.scrollTo(5)}>Партнеры</div>
                        <div className="advogrand-b1_firstLine_menu--button" onClick={() => this.props.scrollTo(6)}>Контакты</div>
                        <div className="advogrand-b1_firstLine_menu--button_recall">Перезвоните мне</div>
                    </div>
                </div>
                <div className="advogrand-b1_line"/>
                <div className="advogrand-b1_secondLine">
                    <div className="advogrand-b1_secondLine--logo">
                        <div className="advogrand-b1_secondLine--logo_picture" style={{backgroundImage: "url(" + logo + ")"}}/>
                        <div className="advogrand-b1_secondLine--logo_title">Advogrand</div>
                    </div>
                    <div className="advogrand-b1_secondLine--text">Ваш личный юрист всегда на связи</div>
                    <div className="advogrand-b1_secondLine--right">
                        <div className="advogrand-b1_secondLine--right_phone">+7 499 322-85-80</div>
                        <div className="advogrand-b1_secondLine--right_pictureBorder" >
                            <div className="advogrand-b1_secondLine--right_pictureBorder--picture" style={{backgroundImage: "url(" + android + ")", height: '21px'}}/>
                        </div>
                        <div className="advogrand-b1_secondLine--right_pictureBorder" >
                            <div className="advogrand-b1_secondLine--right_pictureBorder--picture" style={{backgroundImage: "url(" + apple + ")", width: '16px'}}/>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}

export default Block_1;