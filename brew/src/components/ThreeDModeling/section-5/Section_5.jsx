import React from 'react';
import './section_5.less';
import ThreeDModelingTitle from '../general/ThreeDModeling_title';
import pic1 from '../../../assets/ThreeDModeling/section-5/pic1.png';
import pic2 from '../../../assets/ThreeDModeling/section-5/pic2.png';
import pic3 from '../../../assets/ThreeDModeling/section-5/pic3.png';
import pic4 from '../../../assets/ThreeDModeling/section-5/pic4.png';
import pic5 from '../../../assets/ThreeDModeling/section-5/pic5.png';
import pic6 from '../../../assets/ThreeDModeling/section-5/pic6.png';

const Section_5 = () => (
  <div className="ThreeDModeling-s5">
    <ThreeDModelingTitle
      title="Почему мы лучшие?"
    />

    <div className="content">
      <div className="ThreeDModeling-s5--item">
        <div className="ThreeDModeling-s5--picture">

          <div
            className="ThreeDModeling-s5--picture__circle"
            style={{ right: 0 }}
          />
          <img
            src={pic1}
            alt=""
          />
        </div>
        <div className="ThreeDModeling-s5--decorLine" />
        <div className="ThreeDModeling-s5--description">
          Профессиональные дизайнеры и визуализаторы с зарубежной практикой работы
        </div>
      </div>
      <div className="ThreeDModeling-s5--item">
        <div className="ThreeDModeling-s5--picture">
          <div
            className="ThreeDModeling-s5--picture__circle"
            style={{ bottom: 0 }}
          />
          <img
            src={pic2}
            alt=""
          />
        </div>
        <div className="ThreeDModeling-s5--decorLine" />
        <div className="ThreeDModeling-s5--description">
          Интеративный подход, работаем до полного согласования с Вами
        </div>
      </div>
      <div className="ThreeDModeling-s5--item">
        <div className="ThreeDModeling-s5--picture">
          <div
            className="ThreeDModeling-s5--picture__circle"
            style={{ bottom: 0, right: 0 }}
          />
          <img
            src={pic3}
            alt=""
          />
        </div>
        <div className="ThreeDModeling-s5--decorLine" />
        <div className="ThreeDModeling-s5--description">
          Решаем вопрос закупки, берем авторский надзор на себя
          <br />
          (пакет Full)
        </div>
      </div>
      <div className="ThreeDModeling-s5--item">
        <div className="ThreeDModeling-s5--picture">
          <div
            className="ThreeDModeling-s5--picture__circle"
            style={{ top: '8px', left: 0 }}
          />
          <img
            src={pic4}
            alt=""
          />
        </div>
        <div className="ThreeDModeling-s5--decorLine" />
        <div className="ThreeDModeling-s5--description">
          Над проектом работает группа специалистов под началом project менеджера в ERP системе
        </div>
      </div>

      <div className="ThreeDModeling-s5--item">
        <div className="ThreeDModeling-s5--picture">
          <div
            className="ThreeDModeling-s5--picture__circle"
            style={{ top: 0, left: 0 }}
          />
          <img
            src={pic5}
            alt=""
          />
        </div>
        <div className="ThreeDModeling-s5--decorLine" />
        <div className="ThreeDModeling-s5--description">
          Выполнение раньше установленных сроков
        </div>
      </div>
      <div className="ThreeDModeling-s5--item">
        <div className="ThreeDModeling-s5--picture">
          <div
            className="ThreeDModeling-s5--picture__circle"
            style={{ bottom: 0, left: 0 }}
          />
          <img
            src={pic6}
            alt=""
          />
        </div>
        <div className="ThreeDModeling-s5--decorLine" />
        <div className="ThreeDModeling-s5--description">
          Дарим альбом проекта, вместе с 25% скидкой на следующее обращение
        </div>
      </div>
    </div>

  </div>
);

Section_5.propTypes = {};

export default Section_5;
