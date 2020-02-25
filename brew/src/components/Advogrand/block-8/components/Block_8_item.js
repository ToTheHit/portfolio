import React, {Component} from 'react';

import './block_8_item.less'
import PropTypes from "prop-types";
import playIcon from '../../../../assets/Advogrand/block-7/b7-icon-play.png';

class Block_8_item extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {

    }

    render() {
        return (
            <div className={'Advogrand-b8_item'}>
                <div className="Advogrand-b8_item--video" style={{backgroundImage: "url(" + this.props.picture + ")" }}>
                    <div className="Advogrand-b8_item--video_playIcon" style={{backgroundImage: "url(" + playIcon + ")"}}/>
                </div>
                <div className="Advogrand-b8_item--description">{this.props.description}</div>
            </div>
        )
    }
}

Block_8_item.propTypes = {
    picture: PropTypes.string,
    description: PropTypes.string
};

export default Block_8_item;