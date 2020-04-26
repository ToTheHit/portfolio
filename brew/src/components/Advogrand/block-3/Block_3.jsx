import React, { Component } from 'react';

import './block_3.less';
import Block_3_item from './components/Block_3_item';

import Pic1 from '../../../assets/Advogrand/block-2/b2-1.svg';
import Pic2 from '../../../assets/Advogrand/block-2/b2-2.svg';
import Pic3 from '../../../assets/Advogrand/block-2/b2-3.svg';
import Pic4 from '../../../assets/Advogrand/block-2/b2-4.svg';
import Pic5 from '../../../assets/Advogrand/block-2/b2-5.svg';
import Pic6 from '../../../assets/Advogrand/block-2/b2-6.svg';
import Pic7 from '../../../assets/Advogrand/block-2/b2-7.svg';
import Pic8 from '../../../assets/Advogrand/block-2/b2-8.svg';
import Pic9 from '../../../assets/Advogrand/block-2/b2-9.svg';

class Block_3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pics: [
        {
          picture: <Pic1 />,
          description: 'Устные <br/>консультации',
        },
        {
          picture: <Pic2 />,
          description: 'Звонок <br/>юриста',
        },
        {
          picture: <Pic3 />,
          description: 'Модели <br/>договора',
        },
        {
          picture: <Pic4 />,
          description: 'Устные <br/>бизнес-консультации',
        },
        {
          picture: <Pic5 />,
          description: 'Содейсвтеи <br/>в переговорах',
        },
        {
          picture: <Pic6 />,
          description: 'Обзор изменений <br/>в законодательстве',
        },
        {
          picture: <Pic7 />,
          description: 'Письменные <br/>консультации',
        },
        {
          picture: <Pic8 />,
          description: 'Консультации <br/>в отношении третьих лиц',
        },
        {
          picture: <Pic9 />,
          description: 'Все области <br/>права',
        },
      ],
      renderedPics: [],
    };
    this.getSectionRef = this.getSectionRef.bind(this);
  }

  componentDidMount() {
    const { pics } = this.state;
    const renderedPics = pics.map((pic) => (
      <Block_3_item
        key={Math.random()}
        picture={pic.picture}
        description={pic.description}
      />
    ));
    this.setState({ renderedPics });
  }

  getSectionRef(el) {
    this.sectionRef = el;
  }

  render() {
    const { renderedPics } = this.state;
    return (
      <section className="Advogrand-b3" ref={this.getSectionRef}>
        <div className="Advogrand-b3_content">
          <h2 className="Advogrand-b3_content--title">Услуги предоставляемые сервисом Advogrand</h2>
          <div className="Advogrand-b3_content--pics">
            <div className="Advogrand-b3_content--pics_items">
              {renderedPics[0]}
              {renderedPics[3]}
              {renderedPics[6]}
            </div>
            <div className="Advogrand-b3_content--pics_items">
              {renderedPics[1]}
              {renderedPics[4]}
              {renderedPics[8]}
            </div>
            <div className="Advogrand-b3_content--pics_items">
              {renderedPics[2]}
              {renderedPics[5]}
              {renderedPics[9]}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Block_3;
