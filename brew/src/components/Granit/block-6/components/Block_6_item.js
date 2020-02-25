import React, {Component} from 'react';

import './block_6_item.less'
import PropTypes from "prop-types";

class Block_6_item extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="granit-b6--line_item">
                <div className="granit-b6--line_item-picture" style={{backgroundImage: "url(" + this.props.picture + ")"}}/>
                <div className="granit-b6--line_item-title">{this.props.title}</div>
            </div>
        )
    }
}

Block_6_item.propTypes = {
    picture: PropTypes.string,
    title: PropTypes.string
};

export default Block_6_item;