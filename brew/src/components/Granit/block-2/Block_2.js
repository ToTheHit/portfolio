import React, {Component} from 'react';
import './block_2.less'

import background from "../../../assets/Granit/block-2/b2-background.jpg";

class Block_2 extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return(
            <section className={'granit-b2'}
                style={{backgroundImage: "url(" + background + ")"}}
            >
                <div className="granit-b2_content" >
                    <div className="granit-b2_content--title">быстрая доставка</div>
                    <div className="granit-b2_content--text">
                        бетона, щебня, песка <br/>и других нерудных материалов <br/>по Москве и Московской области
                    </div>
                    <div className="granit-b2_content--linkLine">
                        <div className="granit-b2_content--linkLine_button">Подробнее о доставке</div>
                        <div className="granit-b2_content--linkLine_or">или</div>
                        <div className="granit-b2_content--linkLine_catalog" >перейти в каталог</div>
                    </div>
                </div>
            </section>
        )
    }

}

export default Block_2;
