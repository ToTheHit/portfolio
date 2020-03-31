import React from 'react';
import PropTypes from "prop-types";
import './block_2_item.less';

const Block_2_item = (props) => {
    return (
        <div className={'Binary-b2-item'}>
            <div className="Binary-b2-item__logo" style={{backgroundImage: "url(" + props.icon + ")"}}/>
            <div className="Binary-b2-item__title">{props.title}</div>
            <div className="Binary-b2-item__text">
                {
                    props.text.split('<br/>').map((item, key) => {
                        return <span key={key}>{item}<br/></span>
                    })
                }
            </div>
        </div>
    )
};

Block_2_item.propTypes = {
    icon: PropTypes.string,
    title: PropTypes.string,
    text: PropTypes.string
};

export default Block_2_item;