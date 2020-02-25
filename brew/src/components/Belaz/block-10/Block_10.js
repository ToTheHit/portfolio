import React, {useEffect, useState} from 'react';
import PropTypes from "prop-types";
import './block_10.less';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import pic1 from "../../../assets/Belaz/block-10/pic1.png";
import pic2 from "../../../assets/Belaz/block-10/pic2.png";
import pic3 from "../../../assets/Belaz/block-10/pic3.png";
import Block_10_item from "./components/Block_10_item";

const BLock_10 = (props) => {
    let itemContent = [
        {
            pic: pic1
        },
        {
            pic: pic2
        },
        {
            pic: pic3
        },
        {
            pic: pic2
        }
    ];
    let [itemObject, setItemObject] = useState([]);
    let [items, setItems] = useState([]);

    useEffect(() => {
        setItemObject(itemContent)
    }, []);
    useEffect(() => {
        let renderedItems = itemObject.map((item, index) => {
            return (
                <Block_10_item
                    key={Math.random()}
                    pic={item.pic}
                />
            )
        });
        console.log(renderedItems);
        setItems(renderedItems);
    }, [itemObject.length]);

    return (
        <div className={'Belaz-b10'}>
            <div className="Belaz-b10__content">
                <div className="Belaz-b10__content--title">
                    У нас собственный склад!
                    <div className="Belaz-b10__content--title-subtitle">
                        Это позволяет нам быстро обрабатывать запросы и отгружать детали<br/>в день заказа!
                    </div>
                </div>

                <Slider className='Belaz-b10__content--slider'
                        dots={false}
                        infinite={true}
                        speed={500}
                        slidesToShow={3}
                        slidesToScroll={1}
                        variableWidth={true}
                        draggable={false}
                        centerPadding={'100px'}
                >
                    {items}
                </Slider>
            </div>
        </div>
    )
};

BLock_10.propTypes = {};

export default BLock_10;