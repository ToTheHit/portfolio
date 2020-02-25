import React, {Component} from 'react';

import './block_9_item.less'
import PropTypes from "prop-types";

class Block_9_item extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {

    }

    render() {
        return (
            <div className={'Advogrand-b9_item'}>

                <Hover onHover={
                    <div className="Advogrand-b9_item--description">
                        <div className="Advogrand-b9_item--description_text">
                            {this.props.description}
                        </div>
                    </div>
                }>
                    <div className="Advogrand-b9_item--picture" style={{backgroundImage: "url(" + this.props.picture + ")"}}/>
                </Hover>
            </div>
        )
    }
}

const Hover = ({ onHover, children }) => (
    <div className="Advogrand-b9_item-hover">
        <div className="Advogrand-b9_item-hover__no-hover">{children}</div>
        <div className="Advogrand-b9_item-hover__hover">{onHover}</div>
    </div>
);

Block_9_item.propTypes = {
    picture: PropTypes.string,
    description: PropTypes.string
};

export default Block_9_item;