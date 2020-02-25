import React, {Component} from 'react';
import './granit.less'

import Block_1 from "../../components/Granit/block-1/Block_1";
import Block_2 from "../../components/Granit/block-2/Block_2";
import Block_3 from "../../components/Granit/block-3/Block_3";
import Block_4 from "../../components/Granit/block-4/Block_4";
import Block_5 from "../../components/Granit/block-5/Block_5";
import Block_6 from "../../components/Granit/block-6/Block_6";
import Block_7 from "../../components/Granit/block-7/Block_7";
import Block_8 from "../../components/Granit/block-8/Block_8";

class Granit extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentWillUnmount() {
        console.log('Unmount');
    }

    render() {
        return(
            <div className={'granit'}>
                <Block_1/>
                <Block_2/>
                <Block_3/>
                <Block_4/>
                <Block_5/>
                <Block_6/>
                <Block_7/>
                <Block_8/>
            </div>
        )
    }

}

export default Granit;
