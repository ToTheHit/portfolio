import React from 'react';
import PropTypes from "prop-types";
import './block_2_item.less';

const Block_2_item = (props) => {
    return (
        <div className={'Belaz-b2_item'}>
            <div className="Belaz-b2_item--icon" style={{backgroundImage: "url(" + props.icon + ")"}}/>
            <div className="Belaz-b2_item--text">
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
    text: PropTypes.string
};

export default Block_2_item;