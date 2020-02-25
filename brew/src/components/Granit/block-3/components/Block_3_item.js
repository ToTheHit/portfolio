import React, {Component} from 'react';

import './block_3_item.less'
import PropTypes from "prop-types";

class Block_3_item extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="granit-b3--line_item">
                <div className="granit-b3--line_item-picture" style={{backgroundImage: "url(" + this.props.picture + ")"}}/>
                <div className="granit-b3--line_item-title">{this.props.title}</div>
                <div className="granit-b3--line_item-description">{this.props.description}</div>
                <div className="granit-b3--line_item-cost">{this.props.cost}</div>
                <div className="granit-b3--line_item-button">Подробнее</div>
            </div>
        )
    }
}

Block_3_item.propTypes = {
    picture: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    cost: PropTypes.string
};

export default Block_3_item;