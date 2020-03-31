import React, {Component} from 'react';

import './block_9.less'
import Block_9_item from "./components/Block_9_item";
import pic1 from '../../../assets/Advogrand/block-8/b8-1.png'
import pic2 from '../../../assets/Advogrand/block-8/b8-2.png'
import pic3 from '../../../assets/Advogrand/block-8/b8-3.png'
import pic4 from '../../../assets/Advogrand/block-8/b8-4.png'

class Block_9 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            partners: [
                {
                    picture: pic1,
                    description: '«Глобэкс» — российский коммерческий банк. Основан в 1992 году. В 2012 году банк «Глобэкс» вошёл в ежегодный рейтинг надёжности Forbes. Банк попал в группу «Высокая надёжность», заняв 30-е место с рейтингом 4 балла из 5-ти\n'
                },
                {
                    picture: pic2,
                    description: '«Глобэкс» — российский коммерческий банк. Основан в 1992 году. В 2012 году банк «Глобэкс» вошёл в ежегодный рейтинг надёжности Forbes. Банк попал в группу «Высокая надёжность», заняв 30-е место с рейтингом 4 балла из 5-ти\n'
                },
                {
                    picture: pic3,
                    description: '«Глобэкс» — российский коммерческий банк. Основан в 1992 году. В 2012 году банк «Глобэкс» вошёл в ежегодный рейтинг надёжности Forbes. Банк попал в группу «Высокая надёжность», заняв 30-е место с рейтингом 4 балла из 5-ти\n'
                },
                {
                    picture: pic4,
                    description: '«Глобэкс» — российский коммерческий банк. Основан в 1992 году. В 2012 году банк «Глобэкс» вошёл в ежегодный рейтинг надёжности Forbes. Банк попал в группу «Высокая надёжность», заняв 30-е место с рейтингом 4 балла из 5-ти\n'
                }
            ],
            renderedPartners: []
        };
        this.getSectionRef = this.getSectionRef.bind(this);
    }

    getSectionRef(el){
        this.sectionRef = el;
    };

    componentDidMount() {
        let renderedPartners = this.state.partners.map((partner => {
            return <Block_9_item
                key={Math.random()}
                picture={partner.picture}
                description={partner.description}
            />
        }));
        this.setState({renderedPartners: renderedPartners});
    }

    render() {
        return (
            <section className={'Advogrand-b9'} ref={this.getSectionRef}>
                <div className="Advogrand-b9_title">Партнеры Advogrand</div>
                <div className="Advogrand-b9_slider">
                    {this.state.renderedPartners}
                </div>
            </section>
        )
    }
}

export default Block_9;