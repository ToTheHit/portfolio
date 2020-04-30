import React, { useEffect, useState } from 'react';
import './section_8.less';
import ThreeDModelingTitle from '../general/ThreeDModeling_title';

import photo1 from '../../../assets/ThreeDModeling/section-8/pic1.jpg';
import photo2 from '../../../assets/ThreeDModeling/section-8/pic2.jpg';
import photo3 from '../../../assets/ThreeDModeling/section-8/pic3.jpg';
import photo4 from '../../../assets/ThreeDModeling/section-8/pic4.jpg';
import photo5 from '../../../assets/ThreeDModeling/section-8/pic5.jpg';
import photo6 from '../../../assets/ThreeDModeling/section-8/pic6.jpg';
import DoubleQuote from '../../../assets/ThreeDModeling/section-8/double_quote.svg';

import Section_8_item from './components/Section_8_item';

const Section_8 = () => {
  const persons = [
    {
      photo: photo1,
      name: 'Ирина Притыкина',
      post: 'Директор компании',
    },
    {
      photo: photo2,
      name: 'Игорь Карий',
      post: 'Финансовый директор',
    },
    {
      photo: photo3,
      name: 'Илья Кондрашин',
      post: 'Инженер модельер',
    },
    {
      photo: photo4,
      name: 'Маргарита Гордеева',
      post: '3D дизайнер',
    },
    {
      photo: photo5,
      name: 'Светлана Коток',
      post: 'Дизайнер интерьеров',
    },
    {
      photo: photo6,
      name: 'Максим Ковальский',
      post: 'Дизайнер ландшафтов',
    },
  ];
  const [personsRendered, setPersonRendered] = useState([]);

  useEffect(() => {
    const rendered = persons.map((person) => (
      <Section_8_item
        photo={person.photo}
        name={person.name}
        post={person.post}
        key={Math.random()}
      />
    ));
    setPersonRendered(rendered);
  }, []);

  return (
    <section className="ThreeDModeling-s8">
      <ThreeDModelingTitle
        title="Наша команда"
      />
      <div className="content">
        <div className="ThreeDModeling-s8__personsList">
          {personsRendered}
        </div>
        <div className="ThreeDModeling-s8__quote">
          <DoubleQuote className="ThreeDModeling-s8__quote-before" />
          <DoubleQuote className="ThreeDModeling-s8__quote-after" />

          <div className="ThreeDModeling-s8__quote--title">Ты -то, что ты делаешь!</div>
          <div className="ThreeDModeling-s8__quote--text">
            То, что мы делаем, определяет то, кем мы являемся. Люди чувствуют старание и чувствуют
            неаккуратность. Это связано с уважением друг к другу, так что небрежность - это
            неуважение к самому себе.
          </div>
          <div className="ThreeDModeling-s8__quote--author">
            <div className="ThreeDModeling-s8__quote--name"><b>Ислам Куаныш</b></div>
            <div className="ThreeDModeling-s8__quote--post">Директор</div>
          </div>
        </div>
      </div>
    </section>
  );
};

Section_8.propTypes = {};

export default Section_8;
