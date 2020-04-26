import React, { useEffect, useState } from 'react';
import './block_7.less';
import Image1 from '../../../assets/Belaz/block-7/delivery-truck_1.svg';
import Image2 from '../../../assets/Belaz/block-7/telemarketer_1.svg';
import Block_7_item from './compontents/Block_7_item';

const Block_7 = () => {
  const itemContent = [
    {
      circleContent: {
        text: '10%',
        icon: null,
      },
      text: 'Дополнительная скидка 10%<br/>на вторую запчасть<br/>и любые последующие',
    },
    {
      circleContent: {
        text: '20%',
        icon: null,
      },
      text: 'Скидка 20% при заключении<br/>договора на годовое<br/>сервисное обслуживание',
    },
    {
      circleContent: {
        text: null,
        icon: <Image1 />,
      },
      text: 'Бесплатная доставка<br/>по всей России<br/>для всех клиентов',
    },
    {
      circleContent: {
        text: null,
        icon: <Image2 />,
      },
      text: 'Бесплатная круглосуточная<br/>техническая поддержка',
    },
  ];

  const [itemObject, setItemObject] = useState([]);
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItemObject(itemContent);
  }, []);

  useEffect(() => {
    const renderedItems = itemObject.map((item) => (
      <Block_7_item
        key={Math.random()}
        circleContent={item.circleContent}
        text={item.text}
      />
    ));
    setItems(renderedItems);
  }, [itemObject.length]);

  return (
    <section className="Belaz-b7">
      <div className="Belaz-b7__content">
        <div className="Belaz-b7__content--title">
          У нас разработаны бонусные системы
          <br />
          и скидки для наших клиентов
        </div>
        <div className="Belaz-b7__content--list">
          {items}
        </div>
      </div>
    </section>
  );
};

Block_7.propTypes = {};

export default Block_7;
