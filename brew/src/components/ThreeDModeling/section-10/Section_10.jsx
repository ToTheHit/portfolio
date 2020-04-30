import React from 'react';
import './section_10.less';
import ThreeDModelingTitle from '../general/ThreeDModeling_title';

import background from '../../../assets/ThreeDModeling/section-10/background.jpg';
import PhoneIcon from '../../../assets/ThreeDModeling/section-10/phone.svg';
import MailIcon from '../../../assets/ThreeDModeling/section-10/mail.svg';
import SkypeIcon from '../../../assets/ThreeDModeling/section-10/skype.svg';
import TelegramIcon from '../../../assets/ThreeDModeling/section-10/telegram.svg';
import WhatsappIcon from '../../../assets/ThreeDModeling/section-10/whatsapp.svg';

const Section_10 = () => (
  <section className="ThreeDModeling-s10" style={{ backgroundImage: `url(${background})` }}>
    <ThreeDModelingTitle
      title="Остались вопросы?"
      subtitle="Задайти их в форме ниже и наши специалисты свяжуться с Вами!"
    />
    <div className="content">
      <div className="ThreeDModeling-s10__left">
        <div className="ThreeDModeling-s10__left_inputs">
          <input
            type="text"
            className="ThreeDModeling-s10__left--name ThreeDModeling_input-type2"
            placeholder="Ваше имя"
          />
          <input
            type="email"
            className="ThreeDModeling-s10__left-email ThreeDModeling_input-type2"
            placeholder="E-mail"
          />
          <input
            type="tel"
            className="ThreeDModeling-s10__left--phone ThreeDModeling_input-type2"
            placeholder="Номер телефона"
          />
          <textarea
            placeholder="Ваше сообщение"
            className="ThreeDModeling-s10__left--message  ThreeDModeling_input-type2"
          />
        </div>
        <button type="button" className="ThreeDModeling-s10__left--submit">Оставить заявку!</button>
      </div>
      <div className="ThreeDModeling-s10__right">
        <div className="ThreeDModeling-s10__right--item">
          <div className="ThreeDModeling-s10__right--icon">
            {/*<SVG src={phoneIcon} />*/}
            <PhoneIcon />
          </div>
          <div className="ThreeDModeling-s10__right--itemContent">
            +7 896 876 66 77
          </div>
        </div>

        <div className="ThreeDModeling-s10__right--item">
          <div className="ThreeDModeling-s10__right--icon">
            {/*<SVG src={whatsappIcon} />*/}
            <WhatsappIcon />
          </div>
          <div className="ThreeDModeling-s10__right--itemContent">
            +7 896 876 66 77
          </div>
        </div>

        <div className="ThreeDModeling-s10__right--item">
          <div className="ThreeDModeling-s10__right--icon">
            {/*<SVG src={mailIcon} />*/}
            <MailIcon />
          </div>
          <div className="ThreeDModeling-s10__right--itemContent">
            sales@23degree.kz
          </div>
        </div>

        <div className="ThreeDModeling-s10__right--item">
          <div className="ThreeDModeling-s10__right--icon">
            {/*<SVG src={skypeIcon} />*/}
            <SkypeIcon />
          </div>
          <div className="ThreeDModeling-s10__right--itemContent">
            skype: 23degree
          </div>
        </div>

        <div className="ThreeDModeling-s10__right--item">
          <div className="ThreeDModeling-s10__right--icon">
            {/*<SVG src={telegramIcon} />*/}
            <TelegramIcon />
          </div>
          <div className="ThreeDModeling-s10__right--itemContent">
            telegram: 23degree
          </div>
        </div>
        <div className="ThreeDModeling-s10__right--schedule">
          График работы: с 9-00 до 18-00. Пн.-Пт.
        </div>
      </div>
    </div>

  </section>
);

Section_10.propTypes = {};

export default Section_10;
