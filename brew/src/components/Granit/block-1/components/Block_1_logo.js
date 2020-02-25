import React, {Component} from 'react';

import './block_1_logo.less'
import PropTypes from "prop-types";

class Block_1_logo extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className={'granit-b1_l1--logo'}>
                <div className={'granit-b1_l1--logo_picture'} style={{backgroundImage: "url(" + this.props.picture + ")"}}/>
                <div className="granit-b1_l1--logo_text">
                    <div className={'granit-b1_l1--logo_text_title'} style={this.props.titleStyle}>granit</div>
                    <div className={'granit-b1_l1--logo_text_about'} style={this.props.textStyle}>Доставка нерудных материалов</div>
                </div>
            </div>
        )
    }
}

Block_1_logo.propTypes = {
    picture: PropTypes.string,
    titleStyle: PropTypes.object,
    textStyle: PropTypes.object
};

export default Block_1_logo;