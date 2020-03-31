import React, {useEffect, useState, useRef} from 'react';
import PropTypes from "prop-types";
import './binary.less';
import classNames from "../../lib/classNames";

import Block_1 from '../../components/Binary/block-1/Block_1';
import Block_2 from '../../components/Binary/block-2/Block_2';
import Block_3 from '../../components/Binary/block-3/Block_3';
import Block_4 from '../../components/Binary/block-4/Block_4';
import Block_5 from '../../components/Binary/block-5/Block_5';
import Block_6 from '../../components/Binary/block-6/Block_6';
import Binary_menu from "../../components/Binary/general/Menu";


const Binary = (props) => {
    const ref_Home = useRef(null);
    const ref_AboutUs = useRef(null);
    const ref_Portfolio = useRef(null);
    const ref_Contact = useRef(null);

    let [scrollTo, setScrollTo] = useState(0);
    let [hidden, setHidden] = useState(true);
    // Smooth fade in
    useEffect(() => {
        setHidden(false);
    }, []);

    useEffect(() => {
        switch (scrollTo) {
            case 1:
                ref_Home.current.scrollIntoView({behavior: 'smooth', block: 'start'});
                break;
            case 2:
                ref_AboutUs.current.scrollIntoView({behavior: 'smooth', block: 'start'});
                break;
            case 3:
                ref_Portfolio.current.scrollIntoView({behavior: 'smooth', block: 'start'});
                break;
            case 4:
                ref_Contact.current.scrollIntoView({behavior: 'smooth', block: 'start'});
                break;
            default:
                break;
        }
        ;
        return setScrollTo(0);
    }, [scrollTo]);

    return (
        <div className={classNames('Binary', {['hidden']: hidden})}>
            <Block_1
                ref={ref_Home}
                setScrollTo={setScrollTo}
            />
            <main>
                <Binary_menu
                    setScrollTo={setScrollTo}
                />
                <Block_2
                    ref={ref_AboutUs}
                />
                <Block_3
                    ref={ref_Portfolio}
                />
                <Block_4/>
                <Block_5
                    ref={ref_Contact}
                />
            </main>
            <Block_6/>
        </div>
    )
};

Binary.propTypes = {};

export default Binary;