import React, {Component} from 'react';

import './block_4_item.less'
import PropTypes from "prop-types";

class Block_4_item extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {

    }

    render() {
        return(
            <div className="bodyShop-b4_item">
                <div className="bodyShop-b4_item--picture" style={{backgroundImage: "url(" + this.props.picture + ")"}}/>
            </div>
        )
    }
}

Block_4_item.propTypes = {
    picture: PropTypes.string,
};

export default Block_4_item;