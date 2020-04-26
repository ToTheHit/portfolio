import React, { useEffect, useState } from 'react';
import './belaz.less';
import Block_1 from '../../components/Belaz/block-1/Block_1';
import Block_2 from '../../components/Belaz/block-2/Block_2';
import Block_3 from '../../components/Belaz/block-3/Block_3';
import Block_4 from '../../components/Belaz/block-4/Block_4';
import Block_5 from '../../components/Belaz/block-5/Block_5';
import Block_6 from '../../components/Belaz/block-6/Block_6';
import Block_7 from '../../components/Belaz/block-7/Block_7';
import Block_8 from '../../components/Belaz/block-8/Block_8';
import Block_9 from '../../components/Belaz/block-9/Block_9';
import Block_10 from '../../components/Belaz/block-10/Block_10';
import Block_11 from '../../components/Belaz/block-11/Block_11';
import Block_12 from '../../components/Belaz/block-12/Block_12';
import Block_13 from '../../components/Belaz/block-13/Block_13';
import Block_14 from '../../components/Belaz/block-14/Block_14';
import classNames from '../../lib/classNames';

const Belaz = () => {
  const [hidden, setHidden] = useState(true);

  // Smooth fade in
  useEffect(() => {
    setHidden(false);
  }, []);

  return (
    <div className={classNames('Belaz', { hidden })}>
      <Block_1 />
      <main>
        <Block_2 />
        <Block_3 />
        <Block_4 />
        <Block_5 />
        <Block_6 />
        <Block_7 />
        <Block_8 />
        <Block_9 />
        <Block_10 />
        <Block_11 />
        <Block_12 />
        <Block_13 />
      </main>
      <Block_14 />
    </div>
  );
};

export default Belaz;
