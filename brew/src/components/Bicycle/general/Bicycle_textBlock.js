import React from 'react';
import PropTypes from "prop-types";
import './bicycle_textBlock.less';

const Bicycle_textBlock = (props) => {
    return (
        <div className={'Bicycle-textBlock'}>
            <div className="Bicycle-textBlock__icon" style={{backgroundImage: "url(" + props.icon + ")"}}/>
            <div className="Bicycle-textBlock__title">{props.title}</div>
            <div className="Bicycle-textBlock__text" style={props.textStyle}>{props.text}</div>
            <div className="Bicycle-textBlock__line"/>
        </div>
    )
};

Bicycle_textBlock.propTypes = {
    icon: PropTypes.string,
    title: PropTypes.string,
    text: PropTypes.string,
    textStyle: PropTypes.shape({
        textAlign: PropTypes.string
    })
};

Bicycle_textBlock.defaultProps = {
        textStyle: {
            textAlign: 'center'
        }
}

export default Bicycle_textBlock;