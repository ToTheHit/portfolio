import React from 'react';
import './section_1.less';
import background from '../../../assets/ThreeDModeling/section-1/background.jpg';
import IconLogo from '../../../assets/ThreeDModeling/section-1/23.svg';
import IconPhone from '../../../assets/ThreeDModeling/section-1/phone.svg';
import IconMouseDown from '../../../assets/ThreeDModeling/section-1/mouse_down.svg';

const Section_1 = () => (
  <header className="ThreeDModeling-s1" style={{ backgroundImage: `url(${background})` }}>

    <div className="content">
      <div className="ThreeDModeling-s1_top">
        <h1 className="ThreeDModeling-s1_logo">
          <IconLogo className="ThreeDModeling-s1_logo-svg" />
          <div className="ThreeDModeling-s1_logo-text">Degree</div>
        </h1>
        <div className="ThreeDModeling-s1_call">
          <IconPhone className="ThreeDModeling-s1_call--phone" />
          <div className="ThreeDModeling-s1_call--text">
            <div className="ThreeDModeling-s1_call--title">Есть вопросы? Звоните!</div>
            <div className="ThreeDModeling-s1_call--number">8 /800/ 259 09 36</div>
          </div>
        </div>
      </div>
      <div className="ThreeDModeling-s1_title">
        Услуги по 3D моделированию
        <div className="ThreeDModeling-s1_subtitle">
          полный спектр услуг
        </div>

      </div>
      <h2 className="ThreeDModeling-s1_request">
        Оставьте заявку сейчас и получите дизайн интерьера 25кв
        {'\u00B2'}
        {' '}
        бесплатно!*
      </h2>
      <div className="ThreeDModeling-s1_form">
        <div className="ThreeDModeling-s1_form_inputs">
          <input
            type="text"
            className="ThreeDModeling-s1_form--name ThreeDModeling_input-type1"
            placeholder="Ваше имя"
          />
          <input
            type="email"
            className="ThreeDModeling-s1_form--email ThreeDModeling_input-type1"
            placeholder="E-mail"
          />
          <input
            type="tel"
            className="ThreeDModeling-s1_form--phone ThreeDModeling_input-type1"
            placeholder="Номер телефона"
          />
        </div>
        <button className="ThreeDModeling-s1_form--confirm">Оставить заявку!</button>
        <div className="ThreeDModeling-s1_form--text">
          *Мы гарантируем конфидициальность передаваемых
          данных
        </div>
      </div>
      <div className="ThreeDModeling-s1_mouseDown">
        <IconMouseDown />
      </div>
    </div>
  </header>
);

Section_1.propTypes = {};

export default Section_1;
