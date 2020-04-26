import React, { forwardRef, useEffect, useState } from 'react';
import './block_3.less';
import TextBlock from '../general/TextBlock';

const Block_3 = forwardRef((props, ref) => {
  const itemContent = [
    {
      image: '',
    },
    {
      image: '',
    },
    {
      image: '',
    },
    {
      image: '',
    },
    {
      image: '',
    },
    {
      image: '',
    },
  ];

  const [itemObject, setItemObject] = useState([]);
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItemObject(itemContent);
  }, []);

  useEffect(() => {
    const renderedItems = itemObject.map((item) => (
      <div
        className="Binary-b3__list-item"
        key={Math.random()}
        image={item.image}
      />
    ));
    setItems(renderedItems);
  }, [itemObject.length]);

  return (
    <section className="Binary-b3" ref={ref}>
      <TextBlock
        title="portfolio"
        Tag="h2"
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

      <button type="button" className="Binary-b3__button">read more</button>
    </section>
  );
});

Block_3.propTypes = {};

export default Block_3;
