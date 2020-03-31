import React, {useRef, useState, useEffect} from 'react';
import PropTypes from "prop-types";
import classNames from '../../lib/classNames';

import './bicycle.less';

import Block_1 from '../../components/Bicycle/block-1/Block_1'
import Block_2 from '../../components/Bicycle/block-2/Block_2'
import Block_3 from '../../components/Bicycle/block-3/Block_3'
import Block_4 from '../../components/Bicycle/block-4/Block_4'
import Block_5 from '../../components/Bicycle/block-5/Block_5'
import Block_6 from '../../components/Bicycle/block-6/Block_6'
import Block_7 from '../../components/Bicycle/block-7/Block_7'
import Block_8 from '../../components/Bicycle/block-8/Block_8'
import Block_9 from '../../components/Bicycle/block-9/Block_9'
import Block_10 from '../../components/Bicycle/block-10/Block_10'

const Bicycle = (props) => {
    const ref_AboutUs = useRef(null);
    const ref_Work = useRef(null);
    const ref_Shop = useRef(null);
    const ref_Contact = useRef(null);

    let [scrollTo, setScrollTo] = useState(0);
    let [hidden, setHidden] = useState(true);

    useEffect(() => {
        switch (scrollTo) {
            case 1:
                ref_AboutUs.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
                break;
            case 2:
                ref_Work.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
                break;
            case 3:
                ref_Shop.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
                break;
            case 4:
                ref_Contact.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
                break;
            default:
                break;
        };
        return setScrollTo(0);
    }, [scrollTo]);

    // Smooth fade in
    useEffect(() => {
        setHidden(false);

    }, []);

    return (
        <div className={classNames('Bicycle', {['hidden']: hidden})}>
            <Block_1
                setScrollTo={setScrollTo}
            />
            <main>
                <Block_2 ref={ref_AboutUs}/>
                <Block_3  ref={ref_Work}/>
                <Block_4/>
                <Block_5/>
                <Block_6/>
                <Block_7 ref={ref_Shop}/>
                <Block_8/>
                <Block_9 ref={ref_Contact}/>
            </main>
            <Block_10/>
        </div>
    )
};

Bicycle.propTypes = {};

export default Bicycle;