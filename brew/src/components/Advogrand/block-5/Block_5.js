import React, {Component} from 'react';

import './block_5.less'
import pic1 from '../../../assets/Advogrand/block-4/b4-1.svg';
import pic2 from '../../../assets/Advogrand/block-4/b4-2.svg';
import pic3 from '../../../assets/Advogrand/block-4/b4-3.svg';

class Block_5 extends Component {
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
            <div className={'Advogrand-b5'} ref={this.getSectionRef}>
                <div className="Advogrand-b5_title">Как оказывается услуга</div>
                <div className="Advogrand-b5_raw">
                    <div className="Advogrand-b5_raw--item">
                        <span dangerouslySetInnerHTML={{__html: pic1}} className="Advogrand-b5_raw--item_pic" style={{width: '100px', height: '90px'}}/>
                        <div className="Advogrand-b5_raw--item_description">Появился вопрос –<br/>звоните по бесплатному номеру
                        </div>
                    </div>
                    <div className="Advogrand-b5_raw--item">
                        <span dangerouslySetInnerHTML={{__html: pic2}} className="Advogrand-b5_raw--item_pic" style={{width: '130px', height: '84px'}}/>
                        <div className="Advogrand-b5_raw--item_description">Описываете ситуацию –<br/>получаете ответ в течении 15 минут
                        </div>
                    </div>
                    <div className="Advogrand-b5_raw--item">
                        <span dangerouslySetInnerHTML={{__html: pic3}} className="Advogrand-b5_raw--item_pic" style={{width: '121px', height: '72px'}}/>
                        <div className="Advogrand-b5_raw--item_description"><b>Ваш вопрос решен!</b></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Block_5;