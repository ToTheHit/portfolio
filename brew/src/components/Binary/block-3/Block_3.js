import React, {useEffect, useState, forwardRef} from 'react';
import PropTypes from "prop-types";
import './block_3.less';
import TextBlock from "../general/TextBlock";

const Block_3 = forwardRef((props, ref) => {

    let itemContent = [
        {
            image: ''
        },
        {
            image: ''
        },
        {
            image: ''
        },
        {
            image: ''
        },
        {
            image: ''
        },
        {
            image: ''
        },
    ];

    let [itemObject, setItemObject] = useState([]);
    let [items, setItems] = useState([]);

    useEffect(() => {
        setItemObject(itemContent)
    }, []);

    useEffect(() => {
        let renderedItems = itemObject.map(item => {
            return (
                <div className={'Binary-b3__list-item'}
                    key={Math.random()}
                    image={item.image}
                />
            )
        });
        setItems(renderedItems);

    }, [itemObject.length]);


    return (
        <section className={'Binary-b3'} ref={ref}>
            <TextBlock
                title={'portfolio'}
                Tag={'h2'}
            />
            <div className="Binary-b3__menu">
                <div className="Binary-b3__menu-item">all</div>
                <div className="Binary-b3__menu-item">web</div>
                <div className="Binary-b3__menu-item">apps</div>
                <div className="Binary-b3__menu-item">other</div>
            </div>

            <div className="Binary-b3__list">
                {items}
            </div>

            <button className="Binary-b3__button">read more</button>
        </section>
    )
});

Block_3.propTypes = {};

export default Block_3;