import React from 'react';
import './section_6.less';
import ThreeDModelingTitle from '../general/ThreeDModeling_title';

import pic1 from '../../../assets/ThreeDModeling/section-6/pic1.jpg';
import pic2 from '../../../assets/ThreeDModeling/section-6/pic2.jpg';
import pic3 from '../../../assets/ThreeDModeling/section-6/pic3.jpg';
import pic4 from '../../../assets/ThreeDModeling/section-6/pic4.jpg';

const Section_6 = () => (
  <section className="ThreeDModeling-s6">
    <ThreeDModelingTitle
      title="Процесс взаимодействия"
    />
    <div className="content">
      <div className="ThreeDModeling-s6_item">
        <div className="ThreeDModeling-s6--picture" style={{ backgroundImage: `url(${pic1})` }} />
        <div className="ThreeDModeling-s6--description">
          Заполнение брифа
        </div>
      </div>
      <div className="ThreeDModeling-s6_item">
        <div className="ThreeDModeling-s6--picture" style={{ backgroundImage: `url(${pic2})` }} />
        <div className="ThreeDModeling-s6--description">
          Исследование
        </div>
      </div>
      <div className="ThreeDModeling-s6_item">
        <div className="ThreeDModeling-s6--picture" style={{ backgroundImage: `url(${pic3})` }} />
        <div className="ThreeDModeling-s6--description">
          Идея
        </div>
      </div>
      <div className="ThreeDModeling-s6_item">
        <div className="ThreeDModeling-s6--picture" style={{ backgroundImage: `url(${pic4})` }} />
        <div className="ThreeDModeling-s6--description">
          Завершение
        </div>
      </div>
    </div>
  </section>
);

Section_6.propTypes = {};

export default Section_6;
