import React, { Component } from 'react';

import './block_7.less';
import background from '../../../assets/BodyShop/block-7/b7-background.jpg';

class Block_7 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <section className="bodyShop-b7" style={{ backgroundImage: `url(${background})` }}>
        <div className="bodyShop-b7_contacts">
          <div className="bodyShop-b7_contacts--text">Контакты</div>
          <div className="bodyShop-b7_contacts--address">г. Москва, ул. Дорожная, 8, к.1</div>
          <div className="bodyShop-b7_contacts--phone">8 800 123 43 34</div>
          <div className="bodyShop-b7_contacts--email">info@sitename.ru</div>
        </div>
      </section>
    );
  }
}

export default Block_7;
