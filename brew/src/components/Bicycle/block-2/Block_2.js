import React, {forwardRef} from 'react';
import PropTypes from "prop-types";
import './block_2.less';
import logo from '../../../assets/Bicycle/block-2/Icon.png';

import Bicycle_textBlock from "../general/Bicycle_textBlock";

const Block_2 = forwardRef((props,ref) => {
    return (
        <section className={'Bicycle-b2'} ref={ref}>
            <Bicycle_textBlock
                icon={logo}
                title={'A NEW GENERATION OF VINTAGE BIKE'}
                text={'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'}
            />
        </section>
    )
});

Block_2.propTypes = {};

export default Block_2;