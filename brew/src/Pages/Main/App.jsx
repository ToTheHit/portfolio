import React, { Component } from 'react';
import Layout from '../../components/InstantBrew/Layout/Layout';
import classNames from '../../lib/classNames';

import './app.less';
import './main.less';
import Card from '../../components/MainPage/Card/Card';

import bgGranit from '../../assets/Main/granit.jpg';
import bgBodyshop from '../../assets/Main/bodyshop.jpg';
import bgModels from '../../assets/Main/3dmodel.jpg';
import bgAdvogrand from '../../assets/Main/advogrand.jpg';
import bgBelaz from '../../assets/Main/belaz.jpg';
import bgBicycle from '../../assets/Main/bicycle.jpg';
import bgBinary from '../../assets/Main/binary.jpg';
// import bgFriendsfamily from '../../assets/Main/friendsfamily.jpg';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      darkTheme: false,
      cardsObj: [
        {
          pictureURL: bgBicycle,
          title: 'Bicycle',
          description: 'A new generation of vintage bike',
          link: '/bicycle',
        },
        {
          pictureURL: bgBinary,
          title: 'Binary',
          description: 'Clear, smart, attractive design',
          link: '/binary',
        },
        {
          pictureURL: bgModels,
          title: '3D моделирование',
          description: 'С нашей помощью Вы можете спроектировать и увидеть как будет выглядеть Ваш дом',
          link: '/3dmodeling',
        },
        {
          pictureURL: 'https://www.meistertask.com/embed/at/18661036/large/acd8305fe7a12fa7850fe49d82c4384aa2d467b3.png',
          title: 'ID генератор',
          description: '',
          link: '/idcard',
        },
        {
          pictureURL: bgAdvogrand,
          title: 'Advogrand',
          description: '24 часа в сутки Ваш личный юрист - Advogrand на связи',
          link: '/advogrand',
        },
        {
          pictureURL: bgBodyshop,
          title: 'Кузовной ремонт',
          description: 'Продажа кузовных запчастей с заводской покраской без пробега по РФ',
          link: '/bodyshop',
        },
        {
          pictureURL: bgGranit,
          title: 'Гранит',
          description: 'Быстрая доставка бетона, щебня, песка и других нерудных материалов по Москве и Московской области',
          link: '/granit',
        },
        {
          pictureURL: bgBelaz,
          title: 'Белазы',
          description: 'Оригинальные запчасти для Белаз с бесплатной доставкой в Ваш город!',
          link: '/belaz',
        },

        /* {
          pictureURL: bgFriendsfamily,
          title: 'FriendsFamily',
          description: 'Ателье одинаковой одежды для мам и дочек\nИндивидуальный пошив',
          link: '/friendsfamily',
        }, */
        /*                {
                            pictureURL: bg_amelia,
                            title: 'Амелия',
                            description: '',
                            link: '/amelia'
                        } */
      ],
      cards: [],
      hide: true,
    };

    this.changeTheme = this.changeTheme.bind(this);
    this.changeHide = this.changeHide.bind(this);
  }

  componentDidMount() {
    const { cardsObj } = this.state;
    const cards = cardsObj.map((card) => (
      <Card
        key={card.pictureURL}
        pictureURL={card.pictureURL}
        title={card.title}
        description={card.description}
        link={card.link}
        changeHide={(state) => this.changeHide(state)}
      />
    ));
    this.setState({ cards });
    this.changeHide(false);
  }

  changeTheme() {
    this.setState((prevState) => ({
      darkTheme: !prevState.darkTheme,
    }));
  }

  changeHide(state) {
    setTimeout(() => {
      this.setState({ hide: state });
    }, 100);
  }

  render() {
    const { cards, hide } = this.state;
    return (
      <div className={classNames('App', { hidden: hide })}>
        <h1 className="AppHeader-hidden">Dmitry Ushakov - Portfolio</h1>
        <Layout
          className="welcome-layout"
          style={{ padding: '40px 40px', height: 'auto', minHeight: '100vh' }}
        >
          {cards}
        </Layout>

      </div>
    );
  }
}

export default App;
