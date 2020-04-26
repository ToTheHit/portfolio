import React, {Component} from 'react';

import './block_1_item.less'
import PropTypes from "prop-types";

class Block_1_item extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="bodyShop-b1_item">
                <div className="bodyShop-b1_item--picture" style={{backgroundImage: "url(" + this.props.picture + ")"}}/>
                <div className="bodyShop-b1_item--description">{this.props.description}</div>
            </div>
        )
    }
}

Block_1_item.propTypes = {
    picture: PropTypes.string,
    description: PropTypes.string
};

export default Block_1_item;