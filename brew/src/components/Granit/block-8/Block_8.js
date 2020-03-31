import React, {Component} from 'react';
import './block_8.less'
import logo from "../../../assets/Granit/block-8/b8-1.png";
import Block_1_logo from "../block-1/components/Block_1_logo";

class Block_8 extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return(
            <footer className={'granit-b8'}>
                <div className="granit-b8--content">
                    <div className="granit-b8--content-left">
                        <Block_1_logo
                            picture={logo}
                            titleStyle={{color: "white"}}
                            textStyle={{fontSize: '10.5px'}}
                        />
                        <div className="granit-b8--content-left_text">© 2016. Гранит</div>
                    </div>
                    <div className="granit-b8--content-right">
                        <div className="granit-b8--content-right_telephone">8 800 342-13-33</div>
                        <div className="granit-b8--content-right_text">Беслпатный звонок по России</div>
                        <div className="granit-b8--content-right_button">Обратный звонок</div>
                    </div>
                </div>
            </footer>
        )
    }

}

export default Block_8;
