import React, {Component} from 'react';

import './block_3_item.less'
import PropTypes from "prop-types";

class Block_3_item extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className={'Advogrand_block_3_item'}>
                <span dangerouslySetInnerHTML={{__html: this.props.picture}} className="Advogrand_block_3_item--pic"/>
                <div className="Advogrand_block_3_item--description">{
                    this.props.description.split('<br/>').map((item, key) => {
                        return <span key={key}>{item}<br/></span>
                    })
                }</div>
            </div>
        )
    }
}

Block_3_item.propTypes = {
    picture: PropTypes.string,
    description: PropTypes.string
};

export default Block_3_item;