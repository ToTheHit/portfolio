import React, { Component } from 'react';
import './block_3.less';

import pic1 from '../../../assets/Granit/block-3/b3-1.png';
import pic3 from '../../../assets/Granit/block-3/b3-3.png';
import Block_3_item from './components/Block_3_item';

class Block_3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemsText: [
        {
          picture: pic1,
          title: 'Песок речной',
          description: 'Мелкий речной песок повышает прочность, долговечность и морозоустойчивость растворов, в состав которых он входит.',
          cost: 'от 330 р./т',
        },
        {
          picture: pic1,
          title: 'Щебень',
          description: 'Мелкий речной песок повышает прочность, долговечность и морозоустойчивость растворов, в состав которых он входит.',
          cost: 'от 330 р./т',
        },
        {
          picture: pic3,
          title: 'Грунт',
          description: 'Мелкий речной песок повышает прочность, долговечность и морозоустойчивость растворов, в состав которых он входит.',
          cost: 'от 330 р./т',
        },
      ],
      items: [],
    };
  }

  componentDidMount() {
    const { itemsText } = this.state;
    const items = itemsText.map((item) => (
      <Block_3_item
        key={Math.random()}
        picture={item.picture}
        title={item.title}
        description={item.description}
        cost={item.cost}
      />
    ));
    this.setState({ items });
  }

  render() {
    const { items } = this.state;
    return (
      <section className="granit-b3">
        <div className="granit-b3--title">всегда в наличии</div>
        <div className="granit-b3--line">
          {items}
        </div>
      </section>
    );
  }
}

export default Block_3;
