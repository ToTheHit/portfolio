import React from 'react';
import './section_12.less';

import Facebook from '../../../assets/ThreeDModeling/section-12/facebook.svg';
import Google from '../../../assets/ThreeDModeling/section-12/google-plus.svg';
import Instagram from '../../../assets/ThreeDModeling/section-12/instagram.svg';

const Section_12 = () => (
  <footer className="ThreeDModeling-s12">
    <div className="content">
      <div className="ThreeDModeling-s12__row">
        <nav className="ThreeDModeling-s12__nav">
          <div className="ThreeDModeling-s12--navLink">Главная</div>
          <div className="ThreeDModeling-s12--navLink">Вопросы-ответы</div>
          <div className="ThreeDModeling-s12--navLink">Новости</div>
          <div className="break" />
          <div className="ThreeDModeling-s12--navLink">Тарифы</div>
          <div className="ThreeDModeling-s12--navLink">Личный кабинет</div>
          <div className="ThreeDModeling-s12--navLink">Договор публичной оферты</div>
        </nav>
        <div className="ThreeDModeling-s12__social">
          Мы в социальных сетях:

          <div className="ThreeDModeling-s12__socialRow">
            <div className="ThreeDModeling-s12--socialLink">
              {/* <SVG src={facebook} /> */}
              <Facebook />
            </div>
            <div className="ThreeDModeling-s12--socialLink">
              {/* <SVG src={instagram} /> */}
              <Instagram />
            </div>
            <div className="ThreeDModeling-s12--socialLink">
              {/* <SVG src={google} /> */}
              <Google />
            </div>
          </div>
        </div>
      </div>
      <div className="ThreeDModeling-s12__breakLine" />
      <div className="ThreeDModeling-s12__row">
        <div>
          © Кто-то там, 2020. Все права защищены
        </div>
      </div>

    </div>
  </footer>
);

Section_12.propTypes = {};

export default Section_12;
