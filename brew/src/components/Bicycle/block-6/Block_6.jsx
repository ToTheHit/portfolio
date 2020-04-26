import React, { useEffect, useState } from 'react';
import './block_6.less';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

import Block_6_item from './components/Block_6_item';

const Block_6 = () => {
  const itemContent = [
    {
      authorName: 'AOD New York @aod',
      time: '35 min',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut tellus ac nulla semper rhoncus. Nullam a odio porttitor, dictum turpis vitae, pretium ante amet.',
    },
    {
      authorName: 'AOD New York @aod',
      time: '35 min',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut tellus ac nulla semper rhoncus. Nullam a odio porttitor, dictum turpis vitae, pretium ante amet.',
    },
    {
      authorName: 'AOD New York @aod',
      time: '35 min',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut tellus ac nulla semper rhoncus. Nullam a odio porttitor, dictum turpis vitae, pretium ante amet.',
    },
  ];

  const [itemObject, setItemObject] = useState([]);
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItemObject(itemContent);
  }, []);

  useEffect(() => {
    const renderedItems = itemObject.map((item) => (
      <Block_6_item
        key={Math.random()}
        authorName={item.authorName}
        time={item.time}
        content={item.content}
      />
    ));
    setItems(renderedItems);
  }, [itemObject.length]);

  return (
    <section className="Bicycle-b6">
      <Slider
        className="Bicycle-b6__slider"
        dots
        infinite
        speed={500}
        slidesToShow={1}
        slidesToScroll={1}
      >
        {items}
      </Slider>
    </section>
  );
};

Block_6.propTypes = {};

export default Block_6;
