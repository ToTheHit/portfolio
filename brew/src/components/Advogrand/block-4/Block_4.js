import React, {Component} from 'react';

import './block_4.less'
import background from "../../../assets/Advogrand/block-3/b3-background.jpg";


class Block_4 extends Component {
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
            <section className={'Advogrand-b4'} style={{backgroundImage: "url(" + background + ")"}} ref={this.getSectionRef}>
                <div className="Advogrand-b4_title">О сервисе Advogrand</div>
                <div className="Advogrand-b4_description">
                    В составе нашей команды трудятся профессионалы, имеющие огромный опыт реальной юридической практики.
                    Благодаря этому мы всегда можем найти юридически верное решение, защищающее интересы, сглаживающее
                    конфликтные ситуации.
                    <br/>
                    <br/>
                    Наше абонентское обслуживание позволяет сохранить нашим клиентам время, деньги и душевное спокойствие,
                    ведь ваши интересы находятся под круглосуточной защитой «личного адвоката».
                </div>
                <div className="Advogrand-b4_data">
                    <div className="Advogrand-b4_data--item">
                        <div className="Advogrand-b4_data--item_digit">9</div>
                        <div className="Advogrand-b4_data--item_text">лет на российском<br/>рынке</div>
                    </div>
                    <div className="Advogrand-b4_data--item">
                        <div className="Advogrand-b4_data--item_digit">289</div>
                        <div className="Advogrand-b4_data--item_text">квалифицированных<br/>специалистов</div>
                    </div>
                    <div className="Advogrand-b4_data--item">
                        <div className="Advogrand-b4_data--item_digit">>2,5 млн.</div>
                        <div className="Advogrand-b4_data--item_text">решенных вопросов</div>
                    </div>
                    <div className="Advogrand-b4_data--item">
                        <div className="Advogrand-b4_data--item_digit">3</div>
                        <div className="Advogrand-b4_data--item_text">работаем<br/>в 3-х странах мира</div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Block_4;