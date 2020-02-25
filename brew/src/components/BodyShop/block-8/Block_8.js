import React, {Component} from 'react';

// import './block_8.less'

class Block_8 extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return(
            <div className={'bodyShop-b8'}>
                <div className="bodyShop-b1_topBar" style={{height: '110px', background: 'none'}}>
                    <div className="bodyShop-b1_topBar-left">ЛОГОТИП</div>
                    <div className="bodyShop-b1_topBar-right">
                        <div className="bodyShop-b1_topBar-right--phone" style={{color: '#000000'}}>8 800 232 32 12</div>
                        <div className="bodyShop-b1_topBar-right--text">Заказать обратный звонок</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Block_8;