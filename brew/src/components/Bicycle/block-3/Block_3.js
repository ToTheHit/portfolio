import React, {forwardRef} from 'react';
import PropTypes from "prop-types";
import './block_3.less';
import photo1 from "../../../assets/Bicycle/block-3/bicycle_left.jpg";
import photo2 from "../../../assets/Bicycle/block-3/bicycle_right.jpg";
import icon1 from "../../../assets/Bicycle/block-3/Icon.png";
import icon2 from "../../../assets/Bicycle/block-3/Logo.png";
import Bicycle_textBlock from "../general/Bicycle_textBlock";

const Block_3 = forwardRef((props,ref) => {
    return (
        <section className={'Bicycle-b3'} ref={ref}>
            <div className="Bicycle-b3__photo1" style={{backgroundImage: "url(" + photo1 + ")"}}>
                <div className="Bicycle-b3__photo1-logo" style={{backgroundImage: "url(" + icon2 + ")"}}/>
            </div>
            <div className="Bicycle-b3__right">
                <Bicycle_textBlock
                    icon={icon1}
                    title={'vintage Oliva'}
                    text={'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived.'}
                    textStyle={{textAlign: 'justify'}}
                    triangle={true}
                />
                <div className="Bicycle-b3__right--photo2" style={{backgroundImage: "url(" + photo2 + ")"}}/>
            </div>
        </section>
    )
});

Block_3.propTypes = {};

export default Block_3;