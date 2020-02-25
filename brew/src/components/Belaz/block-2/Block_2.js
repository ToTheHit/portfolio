import React, { useState, useEffect } from 'react';
import './block_2.less';
import Block_2_background from "../../../assets/Belaz/block-2/background.png";
import icon1 from '../../../assets/Belaz/block-2/pic1.png';
import icon2 from '../../../assets/Belaz/block-2/pic2.png';
import icon3 from '../../../assets/Belaz/block-2/pic3.png';
import icon4 from '../../../assets/Belaz/block-2/pic4.png';
import Block_2_item from "./components/Block_2_item";

const Block_2 = () => {
    let itemContent = [
        {
            icon: icon1,
            text: `Дилерские цены - ниже на 20%, <br/>работаем без посредников!`
        },
        {
            icon: icon2,
            text: `Срочная бесплатная доставка <br/>за 7 дней`
        },
        {
            icon: icon3,
            text: `Даем рассрочку <br/>6 месяцев`
        },
        {
            icon: icon4,
            text: `Даем гарантию <br/>от 12 месяцев`
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
                <Block_2_item
                    key={Math.random()}
                    icon={item.icon}
                    text={item.text}
                />
            )
        });
        setItems(renderedItems);

    }, [itemObject.length]);

    return (
        <div className={'Belaz-b2'} style={{backgroundImage: "url(" + Block_2_background + ")"}}>
            <div className="Belaz-b2__content">
                <div className="Belaz-b2__content-leftSide">
                    <div className="Belaz-b2__content-leftSide_content">
                        <div className="Belaz-b2__content-leftSide_content--title">
                            Оригинальные запчасти <br/>для белаз
                        </div>
                        <div className="Belaz-b2__content-leftSide_content--subtitle">
                            с бесплатной доставкой <br/>в Ваш город!
                        </div>
                        <div className="Belaz-b2__content-leftSide_content--list">
                            {items}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Block_2;