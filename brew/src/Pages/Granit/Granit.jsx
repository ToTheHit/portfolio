import React, { Component } from 'react';
import './granit.less';
import classNames from '../../lib/classNames';

import Block_1 from '../../components/Granit/block-1/Block_1';
import Block_2 from '../../components/Granit/block-2/Block_2';
import Block_3 from '../../components/Granit/block-3/Block_3';
import Block_4 from '../../components/Granit/block-4/Block_4';
import Block_5 from '../../components/Granit/block-5/Block_5';
import Block_6 from '../../components/Granit/block-6/Block_6';
import Block_7 from '../../components/Granit/block-7/Block_7';
import Block_8 from '../../components/Granit/block-8/Block_8';

class Granit extends Component {
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
    return (
      <div className={classNames('granit', { hidden: this.state.hide })}>
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

export default Granit;
