import React, {useEffect, useRef, useState} from 'react';
import PropTypes from "prop-types";
import './block_8_item.less';

const Block_8_item = (props) => {
    let [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        setIsOpen(props.activeDescription === props.index);
    }, [props.activeDescription]);

    return (
        <li>
            <span className={'Belaz-b8-item'}>
                <span className={'Belaz-b8-item_title ' + (isOpen ? 'active' : '')} onClick={() => {
                    props.setActiveDescription(props.index);
                }}>
                    {props.title}
                </span>
                <div className="Belaz-b8-item_description"
                     style={{
                         visibility: (isOpen ? 'visible' : 'hidden'),
                         opacity: (isOpen ? 1 : 0)
                     }}
                >
                    <div className="Belaz-b8-item_description-text">
                        {
                            props.description.split('<br/>').map((item, key) => {
                                return <span key={key}>{item}<br/></span>
                            })
                        }
                    </div>
                    <div className="Belaz-b8-item_description-close">
                        <div className="Belaz-b8-item_description-close_icon" onClick={() => {props.setActiveDescription(-1)}}>X</div>
                    </div>
                </div>
            </span>
        </li>
    )
};

Block_8_item.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    index: PropTypes.number
};

export default Block_8_item;