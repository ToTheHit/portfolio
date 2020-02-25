import React, {Component} from 'react';

import './block_10_item_list.less'
import PropTypes from "prop-types";

class Block_10_item_list extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {

    }

    render() {
        return (
            <div className={'Advogrand-b10_item_list'}>
                <div className="Advogrand-b10_item_list--service" style={{fontSize: (this.props.extra ? '13px' : '')}}>
                    <div className="Advogrand-b10_item_list--service_content">
                        {this.props.service}
                    </div>
                </div>
                <div className="Advogrand-b10_item_list--time">{this.props.time}</div>
            </div>
        )
    }
}

Block_10_item_list.propTypes = {
    service: PropTypes.string,
    time: PropTypes.string,
    extra: PropTypes.bool
};

export default Block_10_item_list;