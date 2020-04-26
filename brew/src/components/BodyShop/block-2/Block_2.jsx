import React, { Component } from 'react';

import './block_2.less';
import icon1 from '../../../assets/BodyShop/block-2/b2-pic1.png';
import icon2 from '../../../assets/BodyShop/block-2/b2-pic2.png';
import icon3 from '../../../assets/BodyShop/block-2/b2-pic3.png';
import icon4 from '../../../assets/BodyShop/block-2/b2-pic4.png';
import icon5 from '../../../assets/BodyShop/block-2/b2-pic5.png';
import Block_2_item from './components/Block_2_item';

class Block_2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      icons: [
        {
          picture: icon1,
          title: 'Более 1000 наименований',
          description: 'Возможность заказа и подбора более чем по 2000 наименований деталей',
        },
        {
          picture: icon2,
          title: 'Доставка в любой регион РФ',
          description: 'Мы работаем с любой транспортной компанией и осуществляем доставку в любой регион РФ',
        },
        {
          picture: icon3,
          title: 'Новое состояние деталей',
          description: 'Наши детали не были в употреблении и имеют состояние новых',
        },
        {
          picture: icon4,
          title: 'Европейское качество',
          description: 'Все наши детали привезены из Европы, что гарантирует отличное качество.',
        },
        {
          picture: icon5,
          title: 'Работаем по договору',
          description: 'Все, что мы делаем - официально. Мы заключаем договор купли-продажи и предоставляем все необходимые документыю',
        },
      ],
      items: [],
    };
  }

  componentDidMount() {
    const { icons } = this.state;
    const items = icons.map((icon) => (
      <Block_2_item
        key={Math.random()}
        picture={icon.picture}
        title={icon.title}
        description={icon.description}
      />
    ));
    this.setState({ items });
  }

  render() {
    const { items } = this.state;
    return (
      <section className="bodyShop-b2">
        <div className="bodyShop-b2_content">
          <div className="bodyShop-b2_content--firstLine">
            {items[0]}
            {items[1]}
            {items[2]}
          </div>
          <div className="bodyShop-b2_content--secondLine">
            {items[3]}
            {items[4]}
          </div>
        </div>
      </section>
    );
  }
}

export default Block_2;
