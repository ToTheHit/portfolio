import React from 'react';
import './block_4.less';

import photo1 from '../../../assets/Bicycle/block-4/bicycle-left.jpg';
import photo2 from '../../../assets/Bicycle/block-4/bicycle-right.jpg';
import icon1 from '../../../assets/Bicycle/block-4/Icon.png';
import icon2 from '../../../assets/Bicycle/block-4/Logo.png';
import BicycleTextBlock from '../general/Bicycle_textBlock';

const Block_4 = () => (
  <section className="Bicycle-b4">
    <div className="Bicycle-b4__left">
      <BicycleTextBlock
        icon={icon1}
        title="vintage Oliva"
        text={' Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived.'}
        textStyle={{ textAlign: 'justify' }}
      />
      <div
        className="Bicycle-b4__left--photo1"
        style={{ backgroundImage: `url(${photo1})` }}
      />
    </div>
    <div className="Bicycle-b4__photo2" style={{ backgroundImage: `url(${photo2})` }}>
      <div
        className="Bicycle-b4__photo2-logo"
        style={{ backgroundImage: `url(${icon2})` }}
      />
    </div>
  </section>
);

Block_4.propTypes = {};

export default Block_4;
