import React, {useRef, useState} from 'react';
import './section_4.less';
import ThreeDModelingTitle from '../general/ThreeDModeling_title';
import pic1 from '../../../assets/ThreeDModeling/section-4/pic1.jpg';
import pic2 from '../../../assets/ThreeDModeling/section-4/pic2.jpg';
import pic3 from '../../../assets/ThreeDModeling/section-4/pic3.jpg';
import pic4 from '../../../assets/ThreeDModeling/section-4/pic4.jpg';
import pic5 from '../../../assets/ThreeDModeling/section-4/pic5.jpg';
import pic6 from '../../../assets/ThreeDModeling/section-4/pic6.jpg';
import classNames from '../../../lib/classNames';

const Section_4 = () => {
  const [activeRefButton, setActiveRefButton] = useState(null);
  const refButtonAll = useRef(null);
  const refButtonEx = useRef(null);
  const refButtonIn = useRef(null);
  const refButtonPublic = useRef(null);

  return (
    <div className="ThreeDModeling-s4">
      <ThreeDModelingTitle
        title="Портфолио"
      />
      <div className="content">
        <div className="ThreeDModeling-s4_buttons">
          <button
            type="button"
            ref={refButtonAll}
            className={classNames('ThreeDModeling-s4--button', { active: activeRefButton === refButtonAll })}
            onClick={() => {
              setActiveRefButton(refButtonAll);
            }}
          >
            Все проекты
          </button>
          <button
            type="button"
            ref={refButtonEx}
            className={classNames('ThreeDModeling-s4--button', { active: activeRefButton === refButtonEx })}
            onClick={() => {
              setActiveRefButton(refButtonEx);
            }}
          >
            экстерьеры
          </button>
          <button
            type="button"
            ref={refButtonIn}
            className={classNames('ThreeDModeling-s4--button', { active: activeRefButton === refButtonIn })}
            onClick={() => {
              setActiveRefButton(refButtonIn);
            }}
          >
            жилые интерьеры
          </button>
          <button
            type="button"
            ref={refButtonPublic}
            className={classNames('ThreeDModeling-s4--button', { active: activeRefButton === refButtonPublic })}
            onClick={() => {
              setActiveRefButton(refButtonPublic);
            }}
          >
            общественные интерьеры
          </button>
        </div>
        <div className="ThreeDModeling-s4_pictures">
          <picture>
            <img
              className="ThreeDModeling-s4--picture"
              alt="Пример дизайна экстерьера"
              src={pic1}
            />
          </picture>
          <picture>
            <img
              className="ThreeDModeling-s4--picture"
              alt="Пример дизайна экстерьера"
              src={pic2}
            />
          </picture>
          <picture>
            <img
              className="ThreeDModeling-s4--picture"
              alt="Пример дизайна экстерьера"
              src={pic3}
            />
          </picture>
          <picture>
            <img
              className="ThreeDModeling-s4--picture"
              alt="Пример дизайна экстерьера"
              src={pic4}
            />
          </picture>
          <picture>
            <img
              className="ThreeDModeling-s4--picture"
              alt="Пример дизайна экстерьера"
              src={pic5}
            />
          </picture>
          <picture>
            <img
              className="ThreeDModeling-s4--picture"
              alt="Пример дизайна экстерьера"
              src={pic6}
            />
          </picture>
        </div>
      </div>
    </div>
  );
};

Section_4.propTypes = {};

export default Section_4;
