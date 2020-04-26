import React, { Component } from 'react';
import Layout from '../../components/InstantBrew/Layout/Layout';
import classNames from '../../lib/classNames';

import './app.less';
import './main.less';
import Card from '../../components/MainPage/Card/Card';

import bg_granit from '../../assets/Main/granit.jpg';
import bg_bodyshop from '../../assets/Main/bodyshop.jpg';
import bg_models from '../../assets/Main/3dmodel.jpg';
import bg_advogrand from '../../assets/Main/advogrand.jpg';
import bg_belaz from '../../assets/Main/belaz.jpg';
import bg_bicycle from '../../assets/Main/bicycle.jpg';
import bg_binary from '../../assets/Main/binary.jpg';
import bg_friendsfamily from '../../assets/Main/friendsfamily.jpg';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      darkTheme: false,
      cardsObj: [
        {
          pictureURL: bg_granit,
          title: 'Гранит',
          description: 'Быстрая доставка бетона, щебня, песка и других нерудных материалов по Москве и Московской области',
          link: '/granit',
        },
        {
          pictureURL: bg_bodyshop,
          title: 'Кузовной ремонт',
          description: 'Продажа кузовных запчастей с заводской покраской без пробега по РФ',
          link: '/bodyshop',
        },
        {
          pictureURL: bg_advogrand,
          title: 'Advogrand',
          description: '24 часа в сутки Ваш личный юрист - Advogrand на связи',
          link: '/advogrand',
        },
        {
          pictureURL: bg_belaz,
          title: 'Белазы',
          description: 'Оригинальные запчасти для Белаз с бесплатной доставкой в Ваш город!',
          link: '/belaz',
        },
        {
          pictureURL: bg_bicycle,
          title: 'Bicycle',
          description: 'A new generation of vintage bike',
          link: '/bicycle',
        },
        {
          pictureURL: bg_binary,
          title: 'Binary',
          description: 'Clear, smart, attractive design',
          link: '/binary',
        },
        {
          pictureURL: bg_models,
          title: '3D моделирование',
          description: 'С нашей помощью Вы можете спроектировать и увидеть как будет выглядеть Ваш дом',
          link: '/3dmodeling',
        },
        {
          pictureURL: bg_friendsfamily,
          title: 'FriendsFamily',
          description: 'Ателье одинаковой одежды для мам и дочек\nИндивидуальный пошив',
          link: '/friendsfamily',
        },
        {
          pictureURL: 'https://www.meistertask.com/embed/at/18661036/large/acd8305fe7a12fa7850fe49d82c4384aa2d467b3.png',
          title: 'ID генератор',
          description: '',
          link: '/idcard',
        },
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
    const { cards } = this.state;
    return (
      <div className={classNames('App', { hidden: this.state.hide })}>
        <Layout
          theme={this.state.darkTheme ? 'dark' : 'light'}
          className="welcome-layout"
          style={{ padding: '40px 40px', height: 'auto', minHeight: '100vh' }}
        >
          {/* <Switch label={"Темная тема"} isActive={this.state.darkTheme} onSwitch={this.changeTheme} style={{justifyContent: 'center', marginBottom: '10px'}}/> */}
          {cards}
        </Layout>

      </div>
    );
  }
}

export default App;
