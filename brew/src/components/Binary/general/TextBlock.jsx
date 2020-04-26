import React from 'react';
import PropTypes from "prop-types";
import './textBlock.less';

const TextBlock = (props) => {
    return (
        <div className={'Binary-textBlock'}>
            <props.Tag className="Binary-textBlock__title">
                {props.title}
            </props.Tag>
            <div className="Binary-textBlock__subtitle" style={{display: (props.subtitle ? 'block' : 'none')}}>
                {props.subtitle}
            </div>
            <div className="Binary-textBlock__line"/>
            <div className="Binary-textBlock__text" style={{display: (props.text === '' ? 'none' : 'block')}}>
                {
                    props.text.split('<br/>').map((item, key) => {
                        return <span key={key}>{item}<br/></span>
                    })
                }
            </div>
        </div>
    )
};

TextBlock.propTypes = {
    // Tag: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4']),
    titleTag: PropTypes.elementType,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    text: PropTypes.string
};

TextBlock.defaultProps = {
    titleTag: 'h2',
    title: '',
    subtitle: '',
    text: '',
}

export default TextBlock;