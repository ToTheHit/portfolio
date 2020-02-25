import React, {Component} from 'react';

import './block_1_button.less'
import PropTypes from "prop-types";

class Block_1_button extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div
                className={"granit-b1_l2-button"}
                style={this.props.style}
            >
                {this.props.text}
            </div>
        )
    }
}

Block_1_button.propTypes = {
    text: PropTypes.string,
    link: PropTypes.string
};

export default Block_1_button;