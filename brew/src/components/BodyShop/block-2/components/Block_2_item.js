import React, {Component} from 'react';

import './block_2_item.less'
import PropTypes from "prop-types";

class Block_2_item extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {

    }

    render() {
        return(
            <div className="bodyShop-b2_item">
                <div className="bodyShop-b2_item--picture" style={{backgroundImage: "url(" + this.props.picture + ")"}}/>
                <div className="bodyShop-b2_item--title">{this.props.title}</div>
                <div className="bodyShop-b2_item--description">{this.props.description}</div>
            </div>
        )
    }
}

Block_2_item.propTypes = {
    picture: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string
};

export default Block_2_item;