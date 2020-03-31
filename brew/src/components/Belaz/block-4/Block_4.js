import React, {useEffect, useState} from 'react';
import PropTypes from "prop-types";
import './block_4.less';
import iconCalendar from "../../../assets/Belaz/block-4/calendar.svg";
import iconDump from "../../../assets/Belaz/block-4/dump-truck.svg";
import iconEngine from "../../../assets/Belaz/block-4/engine.svg";
import iconMap from "../../../assets/Belaz/block-4/map.svg";
import Block_4_item from "../block-4/components/Block_4_item";

const Block_4 = () => {
    let itemContent = [
        {
            icon: iconEngine,
            text: `Любые типы деталей<br/>от шайбы до двигателя!`
        },
        {
            icon: iconDump,
            text: `Все модификации Белаз<br/>от 45т до 450т`
        },
        {
            icon: iconCalendar,
            text: `Отгружаем в день заказа!`
        },
        {
            icon: iconMap,
            text: `Доставим в любое место!`
        }
    ];

    let [itemObject, setItemObject] = useState([]);
    let [items, setItems] = useState([]);

    useEffect(() => {
        setItemObject(itemContent)
    }, []);

    useEffect(() => {
        let renderedItems = itemObject.map(item => {
            return (
                <Block_4_item
                    key={Math.random()}
                    icon={item.icon}
                    text={item.text}
                />
            )
        });
        setItems(renderedItems);

    }, [itemObject.length]);

    return (
        <section className={'Belaz-b4'}>
            <div className="Belaz-b4__content">
                <div className="Belaz-b4__content--title">Вам не придется ждать!</div>
                <div className="Belaz-b4__content--subtitle">Любые запчасти для всех моеделей Белаз<br/>всегда в наличии!</div>
                <div className="Belaz-b4__content--list">
                    {items}
                </div>
            </div>
        </section>
    )
};

Block_4.propTypes = {};

export default Block_4;