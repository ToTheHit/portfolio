import React, {Component} from 'react';
import smoothscroll from 'smoothscroll-polyfill';

import './advogrand.less'
import Block_1 from "../../components/Advogrand/block-1/Block_1";
import Block_2 from "../../components/Advogrand/block-2/Block_2";
import Block_3 from "../../components/Advogrand/block-3/Block_3";
import Block_4 from "../../components/Advogrand/block-4/Block_4";
import Block_5 from "../../components/Advogrand/block-5/Block_5";
import Block_6 from "../../components/Advogrand/block-6/Block_6";
import Block_7 from "../../components/Advogrand/block-7/Block_7";
import Block_8 from "../../components/Advogrand/block-8/Block_8";
import Block_9 from "../../components/Advogrand/block-9/Block_9";
import Block_10 from "../../components/Advogrand/block-10/Block_10";
import Block_11 from "../../components/Advogrand/block-11/Block_11";
import Block_12 from "../../components/Advogrand/block-12/Block_12";
import classNames from "../../lib/classNames";

class Advogrand extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hide: true
        };
        this.block5 = React.createRef();
        this.block6 = React.createRef();
        this.block8 = React.createRef();
        this.block9 = React.createRef();
        this.block10 = React.createRef();
        this.block11 = React.createRef();
        this.scrollTo = this.scrollTo.bind(this);
        smoothscroll.polyfill();
    }

    scrollTo(blockNumber) {
        switch (blockNumber) {
            case 1:
                this.block5.current.sectionRef.scrollIntoView({ behavior: 'smooth', block: 'start' });
                break;
            case 2:
                this.block6.current.sectionRef.scrollIntoView({ behavior: 'smooth', block: 'start' });
                break;
            case 3:
                this.block8.current.sectionRef.scrollIntoView({ behavior: 'smooth', block: 'start' });
                break;
            case 4:
                this.block10.current.sectionRef.scrollIntoView({ behavior: 'smooth', block: 'start' });
                break;
            case 5:
                this.block9.current.sectionRef.scrollIntoView({ behavior: 'smooth', block: 'start' });
                break;
            case 6:
                this.block11.current.sectionRef.scrollIntoView({ behavior: 'smooth', block: 'start' });
                break;
        }
    }

    changeHide(state) {
        setTimeout(() => {
            this.setState({hide: state})

        }, 100)
    }
    componentDidMount() {
        this.changeHide(false);
    }

    render() {
        return (
            <div className={classNames('Advogrand', {['hidden']: this.state.hide})}>
                <Block_1
                    scrollTo={this.scrollTo}
                />
                <main>
                    <Block_2/>
                    <Block_3/>
                    <Block_4/>
                    <Block_5 ref={this.block5}/>
                    <Block_6 ref={this.block6}/>
                    <Block_7/>
                    <Block_8 ref={this.block8}/>
                    <Block_9 ref={this.block9}/>
                    <Block_10 ref={this.block10}/>
                    <Block_11 ref={this.block11}/>
                </main>
                <Block_12/>
            </div>
        )
    }
}

export default Advogrand;