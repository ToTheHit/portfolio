import React, {useEffect, useState, useRef} from 'react';
import PropTypes from "prop-types";
import './block_9.less';

import pic1 from '../../../assets/Belaz/block-9/pic1.png'
import pic2 from '../../../assets/Belaz/block-9/pic2.png'
import pic3 from '../../../assets/Belaz/block-9/pic3.png'
import Block_9_item from "./components/Block_9_item";

const Block_9 = (props) => {

    let itemContent = [
        {
            pic: pic1,
            text: 'Вы вносите предоплату<br/>в размере 50%<br/>от стоимости запчасти'
        },
        {
            pic: pic2,
            text: 'Отправляем запчасти<br/>в день заказа'
        },
        {
            pic: pic3,
            text: 'Получаете деталь, <br/>проверяете, оплачиваете<br/>оставшиеся 50%'
        }
    ];

    let [itemObject, setItemObject] = useState([]);
    let [activeDescription, setActiveDescription] = useState(-1);
    let [items, setItems] = useState([]);

    useEffect(() => {
        setItemObject(itemContent)
    }, []);
    useEffect(() => {
        let renderedItems = itemObject.map((item, index) => {
            return (
                <Block_9_item
                    key={Math.random()}
                    pic={item.pic}
                    text={item.text}
                />
            )
        });
        setItems(renderedItems);
    }, [itemObject.length]);

    return (
        <section className={'Belaz-b9'}>
            <div className="Belaz-b9__content">
                <div className="Belaz-b9__content--title">
                    С нами удобно работать!
                    <div className="Belaz-b9__content--title_subtitle">
                        Более 70% клиентов приходят к нам по рекомендации!
                    </div>
                </div>
                <div className="Belaz-b9__content--list">
                    {items}
                </div>
            </div>
        </section>
    )
};

/*

const useIntersect = ({root = null, rootMargin, threshold = 0}) => {
    const [entry, updateEntry] = useState({});
    const [node, setNode] = useState(null);
    const observer = useRef(null);

    useEffect(() => {
        if (observer.current) observer.current.disconnect();

        observer.current = new window.IntersectionObserver(
            ([entry]) => updateEntry(entry),
            {
                root,
                rootMargin,
                threshold
            }
        );

        const {current: currentObserver } = observer;
        if (node) currentObserver.observer(node);
        return () => currentObserver.disconnect();
    }, [node, root, rootMargin, threshold]);
    return [setNode, entry];
}
*/

Block_9.propTypes = {};

export default Block_9;