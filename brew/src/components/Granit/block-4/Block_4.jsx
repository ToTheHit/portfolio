import React, { Component } from 'react';
import './block_4.less';

import pic1 from '../../../assets/Granit/block-4/b4-1.png';
import pic2 from '../../../assets/Granit/block-4/b4-2.png';
import pic3 from '../../../assets/Granit/block-4/b4-3.png';
import Block_4_item from './components/Block_4_item';

class Block_4 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemsText: [
        {
          picture: pic1,
          title: 'Низкая цена',
          description: 'Мы сотрудничаем напрямую <br/>с производителем, поэтому можем гарантировать самую низкую цену.',
        },
        {
          picture: pic2,
          title: 'Быстрая доставка',
          description: 'Весь товар уже находится на нашем складе. Нам остается только погрузить его и в путь!',
        },
        {
          picture: pic3,
          title: 'Индивидуальный подход',
          description: 'Вам нужны бесперебойные поставки или большая партия товара со скидкой? Мы найдем решение!',
        },
      ],
      items: [],
    };
  }

  componentDidMount() {
    const { itemsText } = this.state;
    const items = itemsText.map((item) => (
      <Block_4_item
        key={Math.random()}
        picture={item.picture}
        title={item.title}
        description={item.description}
      />
    ));
    this.setState({ items });
  }

  render() {
    const { items } = this.state;
    return (
      <section className="granit-b4">
        <div className="granit-b4--title">Наши преимущества</div>

        <div className="granit-b4--line">
          {items}
        </div>
      </section>
    );
  }
}

export default Block_4;
