import React, { forwardRef, useEffect, useState } from 'react';
import './block_2.less';
import TextBlock from '../general/TextBlock';
import icon1 from '../../../assets/Binary/layer-23.png';
import icon2 from '../../../assets/Binary/layer-24.png';
import icon3 from '../../../assets/Binary/layer-25.png';

import Block_2_item from './components/Block_2_item';

const Block_2 = forwardRef((props, ref) => {
  const itemContent = [
    {
      icon: icon1,
      title: 'web',
      text: 'We tend to deliver unique and<br/>functional design, through<br/>innovation and creativity.',
    },
    {
      icon: icon2,
      title: 'ios and android',
      text: 'We seek to bring new businesses and<br/>customers closer together through valuable<br/>insights and proper targeting.',
    },
    {
      icon: icon3,
      title: 'marketing',
      text: 'We’ll help you establish the right goals<br/>and build the right paths. Success depends<br/>on setting the right intention.',
    },
  ];

  const [itemObject, setItemObject] = useState([]);
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItemObject(itemContent);
  }, []);

  useEffect(() => {
    const renderedItems = itemObject.map((item) => (
      <Block_2_item
        key={Math.random()}
        icon={item.icon}
        title={item.title}
        text={item.text}
      />
    ));
    setItems(renderedItems);
  }, [itemObject.length]);

  return (
    <section className="Binary-b2" ref={ref}>
      <TextBlock
        title="about"
        text={'We specialize in contemporary, functional, and stunning websites with design that really brings that "WOW" factor. \n'
        + 'In our design process, we make sure to stay one step ahead of the latest trends, \n'
        + '<br/>never forgetting to abide by key web standards.'}
        Tag="h2"
      />

      <div className="Binary-b2__list">
        {items}
      </div>
    </section>
  );
});

Block_2.propTypes = {};

export default Block_2;
