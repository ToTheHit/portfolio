import React, {useEffect, useState} from 'react';
import PropTypes from "prop-types";
import './block_11.less';
import pic1 from "../../../assets/Belaz/block-11/pic1.png";
import pic2 from "../../../assets/Belaz/block-11/pic2.png";
import pic3 from "../../../assets/Belaz/block-11/pic3.png";
import Block_11_item from "./components/Block_11_item";

const Block_11 = (props) => {
    let itemContent = [
        {
            pic: pic1,
            text: 'Организуем выезд специалистов<br/>в течение двух дней'
        },
        {
            pic: pic2,
            text: 'Бригады укомплектованы<br/>всем необходимым оборудованием<br/>для производства работ<br/>любой сложности'

        },
        {
            pic: pic3,
            text: 'Все специалисты проходят обучение<br/>и ежегодную аттестацию'

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
                <Block_11_item
                    key={Math.random()}
                    pic={item.pic}
                    text={item.text}
                />
            )
        });
        setItems(renderedItems);
    }, [itemObject.length]);

    return (
        <section className={'Belaz-b11'}>
            <div className="Belaz-b11__content">
                <div className="Belaz-b11__content--title">
                    У нас в штате есть мобильные бригады,<br/>
                    готовые выехать на сервисное обслуживание,<br/>
                    ремонт и проведение диагностики!
                </div>

                <div className="Belaz-b11__content--list">
                    {items}
                </div>
            </div>
        </section>
    )
};

Block_11.propTypes = {};

export default Block_11;