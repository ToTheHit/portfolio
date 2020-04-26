import React, { useEffect, useState } from 'react';
import './block_4.less';
import IconCalendar from '../../../assets/Belaz/block-4/calendar.svg';
import IconDump from '../../../assets/Belaz/block-4/dump-truck.svg';
import IconEngine from '../../../assets/Belaz/block-4/engine.svg';
import IconMap from '../../../assets/Belaz/block-4/map.svg';
import Block_4_item from './components/Block_4_item';

const Block_4 = () => {
  const itemContent = [
    {
      icon: <IconEngine />,
      text: 'Любые типы деталей<br/>от шайбы до двигателя!',
    },
    {
      icon: <IconDump />,
      text: 'Все модификации Белаз<br/>от 45т до 450т',
    },
    {
      icon: <IconCalendar />,
      text: 'Отгружаем в день заказа!',
    },
    {
      icon: <IconMap />,
      text: 'Доставим в любое место!',
    },
  ];

  const [itemObject, setItemObject] = useState([]);
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItemObject(itemContent);
  }, []);

  useEffect(() => {
    const renderedItems = itemObject.map((item) => (
      <Block_4_item
        key={Math.random()}
        icon={item.icon}
        text={item.text}
      />
    ));
    setItems(renderedItems);
  }, [itemObject.length]);

  return (
    <section className="Belaz-b4">
      <div className="Belaz-b4__content">
        <div className="Belaz-b4__content--title">Вам не придется ждать!</div>
        <div className="Belaz-b4__content--subtitle">
          Любые запчасти для всех моеделей Белаз
          <br />
          всегда
          в наличии!
        </div>
        <div className="Belaz-b4__content--list">
          {items}
        </div>
      </div>
    </section>
  );
};

Block_4.propTypes = {};

export default Block_4;
