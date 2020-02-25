import React, {Component} from 'react';

import './block_5_item.less'
import PropTypes from "prop-types";

class Block_5_item extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="granit-b5--line_item">
                <div className="granit-b5--line_item-picture" style={{backgroundImage: "url(" + this.props.picture + ")"}}>
                    <div className="granit-b5--line_item-picture_sale">Акция</div>
                </div>
                <div className="granit-b5--line_item-title">{this.props.title}</div>
                <div className="granit-b5--line_item-cost">
                    {(this.props.costOld ? <div className="granit-b5--line_item-cost_old">{this.props.costOld}</div> : '')}
                    <div className="granit-b5--line_item-cost_new" style={(!this.props.costOld ? {color: '#000000', marginLeft: '10px'} : {})}>{this.props.costNew}</div>
                </div>
                <div className="granit-b5--line_item-button">Купить</div>
            </div>
        )
    }
}

Block_5_item.propTypes = {
    picture: PropTypes.string,
    title: PropTypes.string,
    costOld: PropTypes.string,
    costNew: PropTypes.string
};

export default Block_5_item;