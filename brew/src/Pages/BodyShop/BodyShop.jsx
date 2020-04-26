import React, { Component } from 'react';
import classNames from '../../lib/classNames';

import './bodyShop.less';
import Block_1 from '../../components/BodyShop/block-1/Block_1';
import Block_2 from '../../components/BodyShop/block-2/Block_2';
import Block_3 from '../../components/BodyShop/block-3/Block_3';
import Block_4 from '../../components/BodyShop/block-4/Block_4';
import Block_5 from '../../components/BodyShop/block-5/Block_5';
import Block_6 from '../../components/BodyShop/block-6/Block_6';
import Block_7 from '../../components/BodyShop/block-7/Block_7';
import Block_8 from '../../components/BodyShop/block-8/Block_8';

class BodyShop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hide: true,
    };
    this.changeHide = this.changeHide.bind(this);
  }

  componentDidMount() {
    this.changeHide(false);
  }

  changeHide(state) {
    setTimeout(() => {
      this.setState({ hide: state });
    }, 100);
  }

  render() {
    const { hide } = this.state;
    return (
      <div className={classNames('bodyShop', { hidden: hide })}>
        <Block_1 />
        <main>
          <Block_2 />
          <Block_3 />
          <Block_4 />
          <Block_5 />
          <Block_6 />
          <Block_7 />
        </main>
        <Block_8 />
      </div>
    );
  }
}

export default BodyShop;
