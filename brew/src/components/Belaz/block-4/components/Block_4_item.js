import React from 'react';
import PropTypes from "prop-types";
import './block_4_item.less';

const Block_4_item = (props) => {
    return (
        <div className={'Belaz-b4-item'}>
            <div className="Belaz-b4-item_icon" dangerouslySetInnerHTML={{__html: props.icon}}/>
            <div className="Belaz-b4-item_text">
                {
                    props.text.split('<br/>').map((item, key) => {
                        return <span key={key}>{item}<br/></span>
                    })
                }
            </div>
        </div>
    )
};

Block_4_item.propTypes = {
    icon: PropTypes.string,
    text: PropTypes.string
};

export default Block_4_item;