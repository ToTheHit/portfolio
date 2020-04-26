import React, { Component } from 'react';

import './block_7.less';
import background from '../../../assets/Advogrand/block-6/backgroundpng.jpg';
import android from '../../../assets/Advogrand/block-6/Android-app-store.png';
import ios from '../../../assets/Advogrand/block-6/iOS-app-store.png';

class Block_7 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.getSectionRef = this.getSectionRef.bind(this);
  }

  getSectionRef(el) {
    this.sectionRef = el;
  }

  render() {
    return (
      <section
        className="Advogrand-b7"
        style={{ backgroundImage: `url(${background})` }}
        ref={this.getSectionRef}
      >
        <div className="Advogrand-b7_content">
          <div className="Advogrand-b7_content--left">
            <h2 className="Advogrand-b7_content--left_title">
              Хотите получить бесплатную
              <br />
              юридическую
              консультацию?
            </h2>
            <ul className="Advogrand-b7_content--left_list">
              <li className="Advogrand-b7_content--left_list--item">
                <div className="Advogrand-b7_content--left_list--item_digit">1.</div>
                <div
                  className="Advogrand-b7_content--left_list--item_text"
                  style={{ marginLeft: '23px' }}
                >
                  Скачайте наше
                  {' '}
                  <u>приложение Reworld</u>
                  {' '}
                  для iOS
                  или Android
                </div>
              </li>
              <li className="Advogrand-b7_content--left_list--item">
                <div className="Advogrand-b7_content--left_list--item_digit">2.</div>
                <div className="Advogrand-b7_content--left_list--item_text">
                  Посмотрите один из 150
                  познавательных видеороликов
                </div>
              </li>
              <li className="Advogrand-b7_content--left_list--item">
                <div className="Advogrand-b7_content--left_list--item_digit">3.</div>
                <div className="Advogrand-b7_content--left_list--item_text">
                  Введите Ваш номер
                  телефона и с Вами свяжется юрист
                  <br />
                  для консультации
                </div>
              </li>
            </ul>
          </div>
          <div className="Advogrand-b7_content--right">
            <button type="button" className="Advogrand-b7_content--right_item">
              <img src={android} alt="Приложение для Android" />
            </button>
            <button type="button" className="Advogrand-b7_content--right_item">
              <img src={ios} alt="Приложение для Apple" />
            </button>
          </div>
        </div>
      </section>
    );
  }
}

export default Block_7;
