import React, {Component} from 'react';

import './block_2.less'
import background from "../../../assets/Advogrand/block-1/b1-background.png";


class Block_2 extends Component {
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
            <div className={'Advogrand-b2'} style={{backgroundImage: "url(" + background + ")"}} ref={this.getSectionRef}>
                <div className="Advogrand-b2_content">
                    <div className="Advogrand-b2_content--firstBlock">Годовой абонемент на услуги <b style={{fontWeight: 800, fontSize: '40px'}}>«ЛИЧНОГО ЮРИСТА»</b></div>
                    <div className="Advogrand-b2_content--secondBlock">24 часа в сутки Ваш личный юрист – <b>Advogrand</b> на связи <br/>
                        всего <b>за 12 рублей в день</b></div>
                    <div className="Advogrand-b2_content--button">Хочу «личного юриста»!</div>
                </div>

            </div>
        )
    }
}

export default Block_2;