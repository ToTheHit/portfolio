import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './block_1.less';
import logo from '../../../assets/Advogrand/block-0/b0-logo.png';
import android from '../../../assets/Advogrand/block-0/b0-android.png';
import apple from '../../../assets/Advogrand/block-0/b0-apple.png';

class Block_1 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { scrollTo } = this.props;
    return (
      <div className="advogrand-b1">
        <nav className="advogrand-b1_firstLine">
          <div className="advogrand-b1_firstLine_menu">
            <div className="advogrand-b1_firstLine_menu--phone">+7 499 322-85-80</div>
            <button
              type="button"
              className="advogrand-b1_firstLine_menu--button"
              onClick={() => scrollTo(1)}
            >
              Как мы работаем
            </button>
            <button
              type="button"
              className="advogrand-b1_firstLine_menu--button"
              onClick={() => scrollTo(2)}
            >
              Преимущества
            </button>
            <button
              type="button"
              className="advogrand-b1_firstLine_menu--button"
              onClick={() => scrollTo(3)}
            >
              Отзывы
            </button>
            <button
              type="button"
              className="advogrand-b1_firstLine_menu--button"
              onClick={() => scrollTo(4)}
            >
              Тарифы
            </button>
            <button
              type="button"
              className="advogrand-b1_firstLine_menu--button"
              onClick={() => scrollTo(5)}
            >
              Партнеры
            </button>
            <button
              type="button"
              className="advogrand-b1_firstLine_menu--button"
              onClick={() => scrollTo(6)}
            >
              Контакты
            </button>
            <button type="button" className="advogrand-b1_firstLine_menu--button_recall">
              Перезвоните мне
            </button>
          </div>
        </nav>
        <div className="advogrand-b1_line" />
        <header className="advogrand-b1_secondLine">
          <div className="advogrand-b1_secondLine--logo">
            <div
              className="advogrand-b1_secondLine--logo_picture"
              style={{ backgroundImage: `url(${logo})` }}
            />
            <h1 className="advogrand-b1_secondLine--logo_title">Advogrand</h1>
          </div>
          <div className="advogrand-b1_secondLine--text">Ваш личный юрист всегда на связи</div>
          <div className="advogrand-b1_secondLine--right">
            <div className="advogrand-b1_secondLine--right_phone">+7 499 322-85-80</div>
            <button type="button" className="advogrand-b1_secondLine--right_pictureBorder">
              <div
                className="advogrand-b1_secondLine--right_pictureBorder--picture"
                style={{ height: '21px' }}
              >
                <img src={android} alt="Приложение для Android" />
              </div>
            </button>
            <button type="button" className="advogrand-b1_secondLine--right_pictureBorder">
              <div
                className="advogrand-b1_secondLine--right_pictureBorder--picture"
                style={{ width: '16px' }}
              >
                <img src={apple} alt="Приложение для Apple" />
              </div>
            </button>
          </div>
        </header>
      </div>
    );
  }
}

Block_1.propTypes = {
  scrollTo: PropTypes.func,
};
Block_1.defaultProps = {
  scrollTo: null,
};

export default Block_1;
