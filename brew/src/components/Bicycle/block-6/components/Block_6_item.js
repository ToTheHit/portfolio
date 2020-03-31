import React from 'react';
import PropTypes from "prop-types";
import './block_6_item.less';
import logo from "../../../../assets/Bicycle/block-6/Icon.png";

const Block_6_item = (props) => {
    return (
        <div className={'Bicycle-b6-item'}>
            <div className="Bicycle-b6-item__logo" style={{backgroundImage: "url(" + logo + ")"}}/>
            <div className="Bicycle-b6-item__author">
                <div className="Bicycle-b6-item__author-name">{props.authorName}</div>
                <div className="Bicycle-b6-item__author-slash">/</div>
                <div className="Bicycle-b6-item__author-time">{props.time}</div>
            </div>
            <div className="Bicycle-b6-item__content">
                {props.content}
            </div>
        </div>
    )
};

Block_6_item.propTypes = {
    authorName: PropTypes.string,
    time: PropTypes.string,
    content: PropTypes.string
};

export default Block_6_item;