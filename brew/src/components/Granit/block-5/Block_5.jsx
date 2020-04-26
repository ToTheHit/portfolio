import React, { Component } from 'react';
import './block_5.less';

import pic1 from '../../../assets/Granit/block-5/b5-1.jpg';
import pic2 from '../../../assets/Granit/block-5/b5-2.jpg';
import pic3 from '../../../assets/Granit/block-5/b5-3.jpg';
import pic4 from '../../../assets/Granit/block-5/b5-4.jpg';
import Block_5_item from './components/Block_5_item';

class Block_5 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemsText: [
        {
          picture: pic1,
          title: 'Гранитный щебень 5-20 мм',
          costOld: '1 500 р./т',
          costNew: '1 350 р./т',
        },
        {
          picture: pic2,
          title: 'Гранитный щебень 5-20 мм',
          costOld: '1 500 р./т',
          costNew: '1 350 р./т',
        },
        {
          picture: pic3,
          title: 'Гранитный щебень 5-20 мм',
          costOld: null,
          costNew: '1 350 р./т',
        },
        {
          picture: pic4,
          title: 'Гранитный щебень 5-20 мм',
          costOld: null,
          costNew: '1 350 р./т',
        },
      ],
      items: [],
    };
  }

  componentDidMount() {
    const { itemsText } = this.state;
    const items = itemsText.map((item) => (
      <Block_5_item
        key={Math.random()}
        picture={item.picture}
        title={item.title}
        costOld={item.costOld}
        costNew={item.costNew}
      />
    ));
    this.setState({ items });
  }

  render() {
    const { items } = this.state;
    return (
      <section className="granit-b5">
        <div className="granit-b5--title">Популярные товары</div>
        <div className="granit-b5--line">
          {items}
        </div>
      </section>
    );
  }
}

export default Block_5;
