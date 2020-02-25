import React, {Component} from 'react';

import './block_4_item.less'
import PropTypes from "prop-types";

class Block_4_item extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="granit-b4--line_item">
                <div className="granit-b4--line_item-picture" style={{backgroundImage: "url(" + this.props.picture + ")"}}/>
                <div className="granit-b4--line_item-title">{this.props.title}</div>
                <div className="granit-b4--line_item-description">{this.props.description}</div>
            </div>
        )
    }
}

Block_4_item.propTypes = {
    picture: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string
};

export default Block_4_item;