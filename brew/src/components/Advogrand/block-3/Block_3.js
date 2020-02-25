import React, {Component} from 'react';

import './block_3.less'
import Block_3_item from "./components/Block_3_item";

import pic1 from '../../../assets/Advogrand/block-2/b2-1.svg';
import pic2 from '../../../assets/Advogrand/block-2/b2-2.svg';
import pic3 from '../../../assets/Advogrand/block-2/b2-3.svg';
import pic4 from '../../../assets/Advogrand/block-2/b2-4.svg';
import pic5 from '../../../assets/Advogrand/block-2/b2-5.svg';
import pic6 from '../../../assets/Advogrand/block-2/b2-6.svg';
import pic7 from '../../../assets/Advogrand/block-2/b2-7.svg';
import pic8 from '../../../assets/Advogrand/block-2/b2-8.svg';
import pic9 from '../../../assets/Advogrand/block-2/b2-9.svg';

class Block_3 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pics: [
                {
                    picture: pic1,
                    description: `Устные <br/>консультации`
                },
                {
                    picture: pic2,
                    description: `Звонок <br/>юриста`
                },
                {
                    picture: pic3,
                    description: `Модели <br/>договора`
                },
                {
                    picture: pic4,
                    description: `Устные <br/>бизнес-консультации`
                },
                {
                    picture: pic5,
                    description: `Содейсвтеи <br/>в переговорах`
                },
                {
                    picture: pic6,
                    description: `Обзор изменений <br/>в законодательстве`
                },
                {
                    picture: pic7,
                    description: `Письменные <br/>консультации`
                },
                ,
                {
                    picture: pic8,
                    description: `Консультации <br/>в отношении третьих лиц`
                },
                {
                    picture: pic9,
                    description: `Все области <br/>права`
                }
            ],
            renderedPics: []
        };
        this.getSectionRef = this.getSectionRef.bind(this);
    }

    getSectionRef(el){
        this.sectionRef = el;
    };

    componentDidMount() {
        let renderedPics = this.state.pics.map(pic => {
            return <Block_3_item
                key={Math.random()}
                picture={pic.picture}
                description={pic.description}
            />
        });
        this.setState({renderedPics: renderedPics});
    }

    render() {
        return (
            <div className={'Advogrand-b3'} ref={this.getSectionRef}>
                <div className="Advogrand-b3_content">
                    <div className="Advogrand-b3_content--title">Услуги предоставляемые сервисом Advogrand</div>
                    <div className="Advogrand-b3_content--pics">
                        <div className="Advogrand-b3_content--pics_items">
                            {this.state.renderedPics[0]}
                            {this.state.renderedPics[3]}
                            {this.state.renderedPics[6]}
                        </div>
                        <div className="Advogrand-b3_content--pics_items">
                            {this.state.renderedPics[1]}
                            {this.state.renderedPics[4]}
                            {this.state.renderedPics[8]}
                        </div>
                        <div className="Advogrand-b3_content--pics_items">
                            {this.state.renderedPics[2]}
                            {this.state.renderedPics[5]}
                            {this.state.renderedPics[9]}

                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default Block_3;