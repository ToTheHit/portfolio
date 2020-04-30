import React, { useState } from 'react';
import './section_3.less';
import ThreeDModelingTitle from '../general/ThreeDModeling_title';
import background from '../../../assets/ThreeDModeling/section-3/background.jpg';
import classNames from '../../../lib/classNames';

const Section_3 = () => {
  const [sliderValue, setSliderValue] = useState(100);
  const [config, setConfig] = useState('light');
  const [visibleDesctiprion, setVisibleDescription] = useState('');


  return (
    <section className="ThreeDModeling-s3" style={{ backgroundImage: `url(${background})` }}>
      <ThreeDModelingTitle
        title="Расчитать стоимость"
        subtitle="Расчитайте предварительную стоимость разработки интерьера"
      />
      <div className="content">
        <div className="ThreeDModeling-s3_left">
          <div className="ThreeDModeling-s3_left--square">
            <div className="ThreeDModeling-s3_left__content">
              <div className="ThreeDModeling-s3_left--blockTitle">Площадь помещения:</div>
              <div className="ThreeDModeling-s3_left--sliderLandmarks">
                <p>
                  100 м
                  {'\u00B2'}
                </p>
                <p>
                  10 000 м
                  {'\u00B2'}
                </p>
                <p>
                  250 000 м
                  {'\u00B2'}
                </p>
                <p>
                  500 000 м
                  {'\u00B2'}
                </p>
              </div>
              <div className="ThreeDModeling-s3_left--sliderDots">
                <div />
                <div />
                <div />
                <div />
              </div>
              <input
                type="range"
                min="100"
                max="500000"
                value={sliderValue}
                step="50"
                className="ThreeDModeling-s3_left--slider"
                onChange={(event) => setSliderValue(event.target.value)}
              />
            </div>
          </div>
          <div className="ThreeDModeling-s3_left--package">
            <div className="ThreeDModeling-s3_left__content">
              <div className="ThreeDModeling-s3_left--blockTitle">Выберите пакет:</div>

              <form
                className="ThreeDModeling-s3_left--buttonsBlock"
                onChange={(e) => setConfig(e.target.value)}
              >
                <label
                  className={classNames('ThreeDModeling-s3_left--buttonContainer', { 'ThreeDModeling-s3_left--buttonContainer-checked': config === 'light' })}
                  onMouseEnter={() => setVisibleDescription('light')}
                  onMouseLeave={() => setVisibleDescription('')}
                >
                  <input
                    type="radio"
                    value="light"
                    checked={config === 'light'}
                    onFocus={() => setVisibleDescription('light')}
                    onBlur={() => setVisibleDescription('')}
                    onChange={() => {}}
                  />
                  <div className="form__type">Light</div>
                  <div className={classNames('ThreeDModeling-s3_left--buttonContainer__description', { 'ThreeDModeling-s3_left--buttonContainer__description-visible': visibleDesctiprion === 'light' })}>
                    <div className="ThreeDModeling-s3_left__content">
                      План расстановки мебели 3D визуализация. Все рабочие чертежи (план полов,
                      план потолка, развертки по стенам, план электросетей)
                    </div>
                  </div>
                </label>

                <label
                  className={classNames('ThreeDModeling-s3_left--buttonContainer', { 'ThreeDModeling-s3_left--buttonContainer-checked': config === 'medium' })}
                  onMouseEnter={() => setVisibleDescription('medium')}
                  onMouseLeave={() => setVisibleDescription('')}
                >
                  <input
                    type="radio"
                    value="medium"
                    checked={config === 'medium'}
                    onFocus={() => setVisibleDescription('medium')}
                    onBlur={() => setVisibleDescription('')}
                    onChange={() => {}}
                  />
                  <div className="form__type">Medium</div>
                  <div className={classNames('ThreeDModeling-s3_left--buttonContainer__description', { 'ThreeDModeling-s3_left--buttonContainer__description-visible': visibleDesctiprion === 'medium' })}>
                    <div className="ThreeDModeling-s3_left__content">
                      План расстановки мебели 3D визуализация. Все рабочие чертежи (план полов,
                      план потолка, развертки по стенам, план электросетей)
                    </div>
                  </div>
                </label>
                <label
                  className={classNames('ThreeDModeling-s3_left--buttonContainer', { 'ThreeDModeling-s3_left--buttonContainer-checked': config === 'full' })}
                  onMouseEnter={() => setVisibleDescription('full')}
                  onMouseLeave={() => setVisibleDescription('')}
                >
                  <input
                    type="radio"
                    value="full"
                    checked={config === 'full'}
                    onFocus={() => setVisibleDescription('full')}
                    onBlur={() => setVisibleDescription('')}
                    onChange={() => {}}
                  />
                  <div className="form__type">Full</div>
                  <div className={classNames('ThreeDModeling-s3_left--buttonContainer__description', { 'ThreeDModeling-s3_left--buttonContainer__description-visible': visibleDesctiprion === 'full' })}>
                    <div className="ThreeDModeling-s3_left__content">
                      План расстановки мебели 3D визуализация. Все рабочие чертежи (план полов,
                      план потолка, р азвертки по стенам, план электросетей)
                    </div>
                  </div>
                </label>
              </form>
            </div>
          </div>
        </div>
        <div className="ThreeDModeling-s3_right">
          <div className="ThreeDModeling-s3_right--result">
            <div className="ThreeDModeling-s3_right--resultName">
              Площадь помещения:
            </div>
            <div className="ThreeDModeling-s3_right--resultValue">
              {sliderValue}
              {' '}
              м
              {'\u00B2'}
            </div>
          </div>
          <div className="ThreeDModeling-s3_right--result">
            <div className="ThreeDModeling-s3_right--resultName">
              Средняя стоимость м
              {'\u00B2'}
            </div>
            <div className="ThreeDModeling-s3_right--resultValue">
              4 850 тг.
            </div>
          </div>
          <div className="ThreeDModeling-s3_right--result">
            <div className="ThreeDModeling-s3_right--resultName">
              Средняя стоимость объекта:
            </div>
            <div className="ThreeDModeling-s3_right--resultValue">
              {sliderValue * 4850}
              {' '}
              тг.
            </div>
          </div>
          <button type="button" className="ThreeDModeling-s3_right--button">Получить консультацию специалиста</button>
          <div className="ThreeDModeling-s3_right--callback">
            или позвоните нам по телефону:
            <div className="ThreeDModeling-s3_right--phone">+7 727 388 71 77</div>
          </div>
        </div>
      </div>
    </section>
  );
};

Section_3.propTypes = {};

export default Section_3;
