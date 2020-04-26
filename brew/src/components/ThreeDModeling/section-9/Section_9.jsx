import React from 'react';
import './section_9.less';
import ThreeDModelingTitle from '../general/ThreeDModeling_title';

import photo1 from '../../../assets/ThreeDModeling/section-9/pic1.jpg';
import photo2 from '../../../assets/ThreeDModeling/section-9/pic2.jpg';

const Section_9 = () => (
  <div className="ThreeDModeling-s9">
    <ThreeDModelingTitle
      title="Блог"
    />
    <div className="content">
      <div className="ThreeDModeling-s9__post">
        <div className="ThreeDModeling-s9__photo">
          <img src={photo1} alt="Фотография с темой поста" />
        </div>
        <div className="ThreeDModeling-s9__link">
          Минимализм – это самый простой, практичный и «спорный» стиль в дизайне интерьеров
        </div>
      </div>
      <div className="ThreeDModeling-s9__post">
        <div className="ThreeDModeling-s9__photo">
          <img src={photo2} alt="Фотография с темой поста" />
        </div>
        <div className="ThreeDModeling-s9__link">
          Прованс - это спокойный южный регион Франции, с великолепнейшей природой
        </div>
      </div>
    </div>
  </div>
);

Section_9.propTypes = {};

export default Section_9;
