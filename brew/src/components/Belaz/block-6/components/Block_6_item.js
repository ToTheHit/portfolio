import React from 'react';
import PropTypes from "prop-types";
import './block_6_item.less';

const Block_6_item = (props) => {
    return (
        <div className={'Belaz-b6-item'} >
            <div className="Belaz-b6-item_image" style={{backgroundImage: "url(" + props.image + ")"}}/>
            <div className="Belaz-b6-item_text">
                {
                    props.text.split('<br/>').map((item, key) => {
                        return <span key={key}>{item}<br/></span>
                    })
                }
            </div>
            <div className="Belaz-b6-item_details">Подробнее</div>
        </div>
    )
};

Block_6_item.propTypes = {
    image: PropTypes.string,
    text: PropTypes.string
};

export default Block_6_item;