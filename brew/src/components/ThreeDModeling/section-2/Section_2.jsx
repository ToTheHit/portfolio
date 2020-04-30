import React from 'react';
import './section_2.less';
import ThreeDModelingTitle from '../general/ThreeDModeling_title';
import pic1 from '../../../assets/ThreeDModeling/section-2/pic1.jpg';
import pic2 from '../../../assets/ThreeDModeling/section-2/pic2.jpg';
import pic3 from '../../../assets/ThreeDModeling/section-2/pic3.jpg';

const Section_2 = () => (
  <section className="ThreeDModeling-s2">
    <ThreeDModelingTitle
      title="Наши услуги"
    />
    <div className="content">
      <div className="ThreeDModeling-s2_line">
        <div className="ThreeDModeling-s2_line--text">
          <h3 className="ThreeDModeling-s2_line--title">
            Дизайн интерьера
          </h3>
          <div className="ThreeDModeling-s2_line--description">
            {/* eslint-disable-next-line max-len */}
            Услуга, направленная на разработку интерьеров помещений с целью обеспечить удобство и эстетически приятное ощущение у человека при нахождении в помещении
          </div>
          <button type="button" className="ThreeDModeling-s2_line--button">Оставить заявку</button>
        </div>
        <picture>
          <img
            className="ThreeDModeling-s2_line--picture"
            alt="Пример дизайна интерьера"
            src={pic1}
          />
        </picture>
      </div>
      <div className="ThreeDModeling-s2_line">
        <div className="ThreeDModeling-s2_line--text">
          <h3 className="ThreeDModeling-s2_line--title">
            Дизайн экстерьера
          </h3>
          <div className="ThreeDModeling-s2_line--description">
            {/* eslint-disable-next-line max-len */}
            Услуга, направленная на разработку дизайна прилегающих элементов зданий, а также дизайн самих зданий, позволяющая обеспечить удобство людей при нахождении на территории
          </div>
        </div>
        <picture>
          <img
            className="ThreeDModeling-s2_line--picture"
            alt="Пример дизайна интерьера"
            src={pic2}
          />
        </picture>
      </div>
      <div className="ThreeDModeling-s2_line">
        <div className="ThreeDModeling-s2_line--text">
          <h3 className="ThreeDModeling-s2_line--title">
            Визуализация
          </h3>
          <div className="ThreeDModeling-s2_line--description">
            {/* eslint-disable-next-line max-len */}
            Услуга, направленная на разработку дизайна прилегающих элементов зданий, а также дизайн самих зданий, позволяющая обеспечить удобство людей при нахождении на территории
          </div>
        </div>
        <picture>
          <img
            className="ThreeDModeling-s2_line--picture"
            alt="Пример дизайна интерьера"
            src={pic3}
          />
        </picture>
      </div>
    </div>
  </section>
);

Section_2.propTypes = {};

export default Section_2;
