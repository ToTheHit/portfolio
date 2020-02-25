import React from 'react';
import PropTypes from "prop-types";
import './block_9_item.less';

const Block_9_item = (props) => {
    return (
        <div className={'Belaz-b9-item'}>
            <div className="Belaz-b9-item_picture" style={{backgroundImage: "url(" + props.pic + ")"}}/>
            <div className="Belaz-b9-item_text">
                {
                    props.text.split('<br/>').map((item, key) => {
                        return <span key={key}>{item}<br/></span>
                    })
                }
            </div>
        </div>
    )
};

Block_9_item.propTypes = {
    pic: PropTypes.string,
    text: PropTypes.string
};

export default Block_9_item;