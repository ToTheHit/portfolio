import React, { useEffect, useState } from 'react';
import './block_8.less';
import photo from '../../../assets/Belaz/block-8/photo.jpg';
import ReloadIcon from '../../../assets/Belaz/block-8/reload.svg';
import Block_8_item from './components/Block_8_item';

const Block_8 = () => {
  const itemContent = [
    {
      title: 'Как заказать деталь правильно?',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br/><br/>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
      title: 'Что делать, если запчасть не понадобилась?',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br/><br/>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
      title: 'В чем преимущества оригинальных деталей?',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br/><br/>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
      title: 'В чем преимущества оригинальных деталей?',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br/><br/>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
      title: 'В чем преимущества оригинальных деталей?',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br/><br/>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
  ];

  const [itemObject, setItemObject] = useState([]);
  const [activeDescription, setActiveDescription] = useState(-1);

  useEffect(() => {
    setItemObject(itemContent);
  }, []);

  return (
    <section className="Belaz-b8">
      <div className="Belaz-b8__content">
        <div className="Belaz-b8__content--title">
          У Вас остались вопросы?
          <div className="Belaz-b8__content--title_subtitle">На ваши вопросы отвечает Эдуард</div>
        </div>
        <div className="Belaz-b8__content--block">
          <div className="Belaz-b8__content--block_left">
            <ul>
              {
                itemObject.map((item, index) => (
                  <Block_8_item
                    key={Math.random()}
                    index={index}
                    title={item.title}
                    description={item.description}
                    activeDescription={activeDescription}
                    setActiveDescription={setActiveDescription}
                  />
                ))
              }
            </ul>

            <div className="Belaz-b8__content--block_left--question">
              <div
                className="Belaz-b8__content--block_left--question_icon"
              >
                <ReloadIcon />
              </div>
              <div className="Belaz-b8__content--block_left--question_text">Еще вопросы</div>
            </div>
          </div>

          <div className="Belaz-b8__content--block_right">
            <div
              className="Belaz-b8__content--block_right--photo"
              style={{ backgroundImage: `url(${photo})` }}
            >
              <div className="Belaz-b8__content--block_right--photo_sign">
                Эдуард Викторович,
                <br />
                Директор ООО &quot;Eddie`s-Car&quot;
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Block_8.propTypes = {};

export default Block_8;
