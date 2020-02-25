import React, {Component} from 'react';

import './block_5_item.less'
import PropTypes from "prop-types";

class Block_5_item extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {

    }

    render() {
        return(
            <div className="bodyShop-b5_item">
                <div className="bodyShop-b5_item--picture" style={{backgroundImage: "url(" + this.props.picture + ")"}}/>
                <div className="bodyShop-b5_item_content">
                    <div className="bodyShop-b5_item_content--name">{this.props.name}</div>
                    <div className="bodyShop-b5_item_content--title">{this.props.title}</div>
                    <div className="bodyShop-b5_item_content--description">{this.props.description}</div>
                </div>
            </div>
        )
    }
}

Block_5_item.propTypes = {
    picture: PropTypes.string,
    name: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string
};

export default Block_5_item;