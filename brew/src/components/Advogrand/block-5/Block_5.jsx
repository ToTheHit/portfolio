import React, { Component } from 'react';

import './block_5.less';
import Pic1 from '../../../assets/Advogrand/block-4/b4-1.svg';
import Pic2 from '../../../assets/Advogrand/block-4/b4-2.svg';
import Pic3 from '../../../assets/Advogrand/block-4/b4-3.svg';

class Block_5 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.getSectionRef = this.getSectionRef.bind(this);
  }

  getSectionRef(el) {
    this.sectionRef = el;
  }

  render() {
    return (
      <section className="Advogrand-b5" ref={this.getSectionRef}>
        <h2 className="Advogrand-b5_title">Как оказывается услуга</h2>
        <div className="Advogrand-b5_raw">
          <div className="Advogrand-b5_raw--item">
            <span
              className="Advogrand-b5_raw--item_pic"
            >
              <Pic1 />
            </span>
            <div className="Advogrand-b5_raw--item_description">
              Появился вопрос –
              <br />
              звоните по бесплатному номеру
            </div>
          </div>
          <div className="Advogrand-b5_raw--item">
            <span
              className="Advogrand-b5_raw--item_pic"
            >
              <Pic2 />
            </span>
            <div className="Advogrand-b5_raw--item_description">
              Описываете ситуацию –
              <br />
              получаете ответ в течении 15 минут
            </div>
          </div>
          <div className="Advogrand-b5_raw--item">
            <span
              className="Advogrand-b5_raw--item_pic"
            >
              <Pic3 />
            </span>
            <div className="Advogrand-b5_raw--item_description"><b>Ваш вопрос решен!</b></div>
          </div>
        </div>
      </section>
    );
  }
}

export default Block_5;
