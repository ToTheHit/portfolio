import React, { useRef } from 'react';
import './block_4.less';

import photo1 from '../../../assets/Bicycle/block-4/bicycle-left.jpg';
import photo2 from '../../../assets/Bicycle/block-4/bicycle-right.jpg';
import icon1 from '../../../assets/Bicycle/block-4/Icon.png';
import icon2 from '../../../assets/Bicycle/block-4/Logo.png';
import BicycleTextBlock from '../general/Bicycle_textBlock';
import inViewport from '../../../lib/Hook_inViewport';
import classNames from '../../../lib/classNames';

const Block_4 = () => {
  const refPhoto1 = useRef(null);
  const refTextBlock = useRef(null);
  const refPhoto2 = useRef(null);
  const isVisiblePhoto1 = inViewport(refPhoto1, 0.7, undefined, true);
  const isVisiblePhoto2 = inViewport(refPhoto2, 0.7, undefined, true);
  const isVisibleTextBlock = inViewport(refTextBlock, 0.7, undefined, true);

  return (
    <section className="Bicycle-b4">
      <div className="Bicycle-b4__left">
        <BicycleTextBlock
          icon={icon1}
          className={classNames({
            'Bicycle-hidden': !isVisibleTextBlock,
            'Bicycle--AnimateAppearFromLeft': isVisibleTextBlock,
          })}
          title="vintage Oliva"
          text={' Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived.'}
          textStyle={{ textAlign: 'justify' }}
          ref={refTextBlock}
        />
        <div
          className={classNames('Bicycle-b4__left--photo1', {
            'Bicycle-hidden': !isVisiblePhoto2,
            'Bicycle--AnimateAppearFromBottom': isVisiblePhoto2,
          })}
          style={{ backgroundImage: `url(${photo1})` }}
          ref={refPhoto1}
        />
      </div>
      <div
        className={classNames('Bicycle-b4__photo2', {
          'Bicycle-hidden': !isVisiblePhoto2,
          'Bicycle--AnimateAppearFromRight': isVisiblePhoto2,
        })}
        style={{ backgroundImage: `url(${photo2})` }}
      >
        <div
          className="Bicycle-b4__photo2-logo"
          style={{ backgroundImage: `url(${icon2})` }}
          ref={refPhoto2}
        />
      </div>
    </section>
  );
};

Block_4.propTypes = {};

export default Block_4;
