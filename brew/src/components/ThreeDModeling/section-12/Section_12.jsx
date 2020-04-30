import React from 'react';
import './section_12.less';

import Facebook from '../../../assets/ThreeDModeling/section-12/facebook.svg';
import Google from '../../../assets/ThreeDModeling/section-12/google-plus.svg';
import Instagram from '../../../assets/ThreeDModeling/section-12/instagram.svg';

const Section_12 = () => (
  <footer className="ThreeDModeling-s12" role="contentinfo">
    <div className="content">
      <div className="ThreeDModeling-s12__row">
        <nav className="ThreeDModeling-s12__nav">
          <a href="/3dmodeling" className="ThreeDModeling-s12--navLink">Главная</a>
          <a href="/3dmodeling" className="ThreeDModeling-s12--navLink">Вопросы-ответы</a>
          <a href="/3dmodeling" className="ThreeDModeling-s12--navLink">Новости</a>
          <a href="/3dmodeling" className="break" />
          <a href="/3dmodeling" className="ThreeDModeling-s12--navLink">Тарифы</a>
          <a href="/3dmodeling" className="ThreeDModeling-s12--navLink">Личный кабинет</a>
          <a href="/3dmodeling" className="ThreeDModeling-s12--navLink">Договор публичной оферты</a>
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
