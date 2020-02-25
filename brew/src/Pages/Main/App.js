import React, {Component} from 'react';
import Layout from "../../components/InstantBrew/Layout/Layout";
import Switch from "../../components/InstantBrew/Switch/Switch";

import './app.less';
import Card from "../../components/MainPage/Card/Card";

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            darkTheme: false,
            cardsObj: [
                {
                    pictureURL: 'https://www.meistertask.com/embed/at/14342703/large/a966ea0824abdf469c86dfd6aa4e82a68cbc0a23.png',
                    title: 'Гранит',
                    description: 'Быстрая доставка бетона, щебня, песка и других нерудных материалов по Москве и Московской области',
                    link: '/granit'
                },
                {
                    pictureURL: 'https://www.meistertask.com/embed/at/16234706/large/9708fad4240e82aca4bf6d85363d4578ffb34b84.png',
                    title: "Кузовной ремонт",
                    description: "Продажа кузовных запчастей с заводской покраской без пробега по РФ",
                    link: '/bodyshop'
                },
                {
                    pictureURL: 'https://www.meistertask.com/embed/at/14342683/large/085154eb14292d626bbd39dcfe3bf1add83caf13.png',
                    title: 'Advogrand',
                    description: '24 часа в сутки Ваш личный юрист - Advogrand на связи',
                    link: '/advogrand'
                },
                {
                    pictureURL: 'https://www.meistertask.com/embed/at/14342735/large/16459ad4d919ba4c167a0ec9dd9d0461e925a12a.png',
                    title: 'Белазы',
                    description: 'Оригинальные запчасти для Белаз с бесплатной доставкой в Ваш город!',
                    link: '/belaz'
                },
                {
                    pictureURL: 'https://www.meistertask.com/embed/at/14342802/large/8e3fa0fa2eb205354a8e0d911846f2e816dc2380.png',
                    title: 'FriendsFamily',
                    description: 'Ателье одинаковой одежды для мам и дочек\nИндивидуальный пошив',
                    link: '/friendsfamily'
                },
                {
                    pictureURL: 'https://www.meistertask.com/embed/at/14342733/large/6cb792456bd255298fa3e8ea490a0bb4914064af.png',
                    title: '3D моделирование',
                    description: 'С нашей помощью Вы можете спроектировать и увидеть как будет выглядеть Ваш дом',
                    link: '/3dmodeling'
                },
                {
                    pictureURL: 'https://www.meistertask.com/embed/at/14342746/large/dbc9b859e91c8dc0db77ca8b90737f1f0fe87522.png',
                    title: 'Амелия',
                    description: '---------',
                    link: '/amelia'
                },
                {
                    pictureURL: 'https://www.meistertask.com/embed/at/14342762/large/4926cd033bb088f51b0b8b1cffca3626b64386aa.png',
                    title: 'Баскетбол',
                    description: 'Прямые эфиры.Эксперсс прогнозы и ставки',
                    link: '/basketball'
                }
            ],
            cards: []

        };

        this.changeTheme = this.changeTheme.bind(this);
    }

    changeTheme() {
        this.setState(prevState => ({
            darkTheme: !prevState.darkTheme
        }))
    }

    componentDidMount() {
        let cards = this.state.cardsObj.map(card => {
            return (
                <Card
                    key={card.pictureURL}
                    pictureURL={card.pictureURL}
                    title={card.title}
                    description={card.description}
                    link={card.link}
                />
            )
        });
        this.setState({cards: cards});
    }

    render() {
        return (
            <div className="App">
                <Layout theme={this.state.darkTheme ? "dark" : 'light'} className={'welcome-layout'} style={{padding: '40px 40px', height: 'auto', minHeight: '100vh'}}>
                    <Switch label={"Темная тема"} isActive={this.state.darkTheme} onSwitch={this.changeTheme} style={{justifyContent: 'center', marginBottom: '10px'}}/>
                    {this.state.cards}
                </Layout>
            </div>
        );
    }
}

export default App;
