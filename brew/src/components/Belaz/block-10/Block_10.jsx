import React, { useEffect, useState } from 'react';
import './block_10.less';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import pic1 from '../../../assets/Belaz/block-10/pic1.jpg';
import pic2 from '../../../assets/Belaz/block-10/pic2.jpg';
import pic3 from '../../../assets/Belaz/block-10/pic3.jpg';
import Block_10_item from './components/Block_10_item';

const BLock_10 = () => {
  const itemContent = [
    {
      pic: pic1,
    },
    {
      pic: pic2,
    },
    {
      pic: pic3,
    },
    {
      pic: pic2,
    },
  ];
  const [itemObject, setItemObject] = useState([]);
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItemObject(itemContent);
  }, []);
  useEffect(() => {
    const renderedItems = itemObject.map((item) => (
      <Block_10_item
        key={Math.random()}
        pic={item.pic}
      />
    ));

    setItems(renderedItems);
  }, [itemObject.length]);

  return (
    <section className="Belaz-b10">
      <div className="Belaz-b10__content">
        <div className="Belaz-b10__content--title">
          У нас собственный склад!
          <div className="Belaz-b10__content--title-subtitle">
            Это позволяет нам быстро обрабатывать запросы и отгружать детали
            <br />
            в день заказа!
          </div>
        </div>

        <Slider
          className="Belaz-b10__content--slider"
          dots={false}
          infinite
          speed={500}
          slidesToShow={3}
          slidesToScroll={1}
          variableWidth
          draggable={false}
          centerPadding="100px"
        >
          {items}
        </Slider>
      </div>
    </section>
  );
};

BLock_10.propTypes = {};

export default BLock_10;
