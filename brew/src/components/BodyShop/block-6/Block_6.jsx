import React, { Component } from 'react';

import './block_6.less';


class Block_6 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <section className="bodyShop-b6">
        <div className="bodyShop-b6_text1">Нужна консультация?</div>
        <div className="bodyShop-b6_text2">Заполните форму и получите максимально точную цену!</div>
        <div className="bodyShop-b6_form">
          <div className="bodyShop-b6_form--name">
            <div className="bodyShop-b6_form--name_text">Ваше имя:</div>
            <input className="bodyShop-b6_form--name_input" placeholder="Введите" />
          </div>
          <button type="button" className="bodyShop-b6_form--button">Заказать консультацию</button>
        </div>
      </section>
    );
  }
}

export default Block_6;
