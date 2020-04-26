import React from 'react';
import './block_5.less';
import IconCall from '../../../assets/Belaz/block-3/call.svg';

const Block_5 = (props) => (
  <section className="Belaz-b5">
    <div className="Belaz-b5__content">
      <div className="Belaz-b5__content--title">Ищете конкретную деталь?</div>
      <div className="Belaz-b5__content--subtitle">
        Если у Вас есть артикул - введите его в поле
        ниже и получите цену
        <br />
        ПРЯМО СЕЙЧАС!
      </div>
      <div className="Belaz-b5__content--form">
        <div className="Belaz-b5__content--form_box">
          <input
            className="Belaz-b5__content--form_box-input"
            placeholder="Введите артикул детали"
            type="text"
          />
          <div className="Belaz-b5__content--form_box-icon" />
        </div>

        <div className="Belaz-b5__content--form_box">
          <input
            className="Belaz-b5__content--form_box-input"
            placeholder="Введите ваш телефон"
            type="text"
          />
          <div className="Belaz-b5__content--form_box-icon"><IconCall /></div>
        </div>

        <div className="Belaz-b5__content--form_button">
          узнать цену
        </div>
      </div>
      <div className="Belaz-b5__content--callback1">
        Мы перезвоним вам в течение 3 минут и назовем цену детали!
      </div>
      <div className="Belaz-b5__content--callback2">
        Или Вы можете перезвонить нам сами:
      </div>
      <div className="Belaz-b5__content--phone">
        +7 (818) 247-47-25
      </div>
    </div>
  </section>
);

Block_5.propTypes = {};

export default Block_5;
