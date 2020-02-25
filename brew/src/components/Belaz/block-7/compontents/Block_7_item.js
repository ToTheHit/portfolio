import React from 'react';
import PropTypes from "prop-types";
import './block_7_item.less';

const Block_7_item = (props) => {
    return (
        <div className={'Belaz-b7-item'}>
            <div className="Belaz-b7-item--circle">
                {props.circleContent.text}
                <div className="Belaz-b7-item--circle_icon"
                     dangerouslySetInnerHTML={{__html: props.circleContent.icon}}
                     style={{display: (!props.circleContent.icon ? 'none' : null)}}
                />
            </div>
            <div className="Belaz-b7-item--text">
                {
                    props.text.split('<br/>').map((item, key) => {
                        return <span key={key}>{item}<br/></span>
                    })
                }
            </div>
        </div>
    )
};

Block_7_item.propTypes = {
    circleContent: PropTypes.shape({
        text: PropTypes.string,
        icon: PropTypes.string
    }),
    text: PropTypes.string
};

export default Block_7_item;