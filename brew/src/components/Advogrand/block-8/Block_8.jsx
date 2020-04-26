import React, { Component } from 'react';
import Slider from 'react-slick';

import './block_8.less';
import pic1 from '../../../assets/Advogrand/block-7/b7-1.jpg';
import pic2 from '../../../assets/Advogrand/block-7/b7-2.jpg';
import pic3 from '../../../assets/Advogrand/block-7/b7-3.jpg';
import Block_8_item from './components/Block_8_item';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const category = {
  health: 0, business: 1, family: 2, communalServices: 3, property: 4, all: 5,
};
Object.freeze(category);

class Block_8 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentCategory: 1,
      items: [
        {
          picture: pic1,
          description: 'Длинное название видеоролика в две строки просто длинное',
        },
        {
          picture: pic2,
          description: 'Название видеоролика',
        },
        {
          picture: pic3,
          description: 'Длинное название видеоролика в две строки очень длинное',
        },
        {
          picture: pic1,
          description: 'Длинное название видеоролика в две строки просто длинное',
        },
        {
          picture: pic2,
          description: 'Название видеоролика',
        },
        {
          picture: pic3,
          description: 'Длинное название видеоролика в две строки очень длинное',
        },

      ],
      renderedItems: [],

    };
    this.getSectionRef = this.getSectionRef.bind(this);
  }

  componentDidMount() {
    const { items } = this.state;
    const renderedItems = items.map((item) => (
      <Block_8_item
        key={Math.random()}
        picture={item.picture}
        description={item.description}
      />
    ));
    this.setState({ renderedItems });
  }

  getSectionRef(el) {
    this.sectionRef = el;
  }

  render() {
    const { currentCategory, renderedItems } = this.state;
    return (
      <section className="Advogrand-b8" ref={this.getSectionRef}>
        <div className="Advogrand-b8_title">Отзывы</div>
        <div className="Advogrand-b8_category">
          <button
            type="button"
            className={currentCategory === category.health ? 'Advogrand-b8_category--item Advogrand-b8_category--item_active' : 'Advogrand-b8_category--item'}
            onClick={() => {
              this.setState({ currentCategory: category.health });
            }}
          >
            здравоохранение
          </button>
          <button
            type="button"
            className={currentCategory === category.business ? 'Advogrand-b8_category--item Advogrand-b8_category--item_active' : 'Advogrand-b8_category--item'}
            onClick={() => {
              this.setState({ currentCategory: category.business });
            }}
          >
            бизнес
          </button>
          <button
            type="button"
            className={currentCategory === category.family ? 'Advogrand-b8_category--item Advogrand-b8_category--item_active' : 'Advogrand-b8_category--item'}
            onClick={() => {
              this.setState({ currentCategory: category.family });
            }}
          >
            семья
          </button>
          <button
            type="button"
            className={currentCategory === category.communalServices ? 'Advogrand-b8_category--item Advogrand-b8_category--item_active' : 'Advogrand-b8_category--item'}
            onClick={() => {
              this.setState({ currentCategory: category.communalServices });
            }}
          >
            жкх
          </button>
          <button
            type="button"
            className={currentCategory === category.property ? 'Advogrand-b8_category--item Advogrand-b8_category--item_active' : 'Advogrand-b8_category--item'}
            onClick={() => {
              this.setState({ currentCategory: category.property });
            }}
          >
            недвижимость
          </button>
          <button
            type="button"
            className={currentCategory === category.all ? 'Advogrand-b8_category--item Advogrand-b8_category--item_active' : 'Advogrand-b8_category--item'}
            onClick={() => {
              this.setState({ currentCategory: category.all });
            }}
          >
            все
          </button>
        </div>

        <Slider
          className="Advogrand-b8_videoRaw"
          dots
          infinite
          speed={500}
          slidesToShow={3}
          slidesToScroll={1}
          variableWidth
          draggable={false}
        >
          {renderedItems}
        </Slider>
      </section>
    );
  }
}

export default Block_8;
