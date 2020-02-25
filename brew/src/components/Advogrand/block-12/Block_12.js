import React, {Component} from 'react';

import './block_12.less'
import logo from '../../../assets/Advogrand/block-11/b11-1.png'

class Block_12 extends Component {
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
            <div className={'Advogrand-b12'} ref={this.getSectionRef}>
                <div className="Advogrand-b12_content">
                    <div className="Advogrand-b12_content--logo" style={{backgroundImage: "url(" + logo + ")"}}/>
                </div>
            </div>
        )
    }
}

export default Block_12;