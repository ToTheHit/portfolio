import React from 'react';
import PropTypes from "prop-types";
import './block_11_item.less';

const Block_11_item = (props) => {
    return (
        <div className={'Belaz-b11-item'}>
            <div className="Belaz-b11-item__picture" style={{backgroundImage: "url(" + props.pic  + ")"}}/>
            <div className="Belaz-b11-item__text">
                {
                    props.text.split('<br/>').map((item, key) => {
                        return <span key={key}>{item}<br/></span>
                    })
                }
            </div>
        </div>
    )
};

Block_11_item.propTypes = {};

export default Block_11_item;