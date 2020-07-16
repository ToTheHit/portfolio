import React, { useRef } from 'react';
import './block_5.less';

import photo1 from '../../../assets/Bicycle/block-5/bicycle-left.jpg';
import photo2 from '../../../assets/Bicycle/block-5/bicycle-right.jpg';
import photo3 from '../../../assets/Bicycle/block-5/bicycle-middle.jpg';
import logo from '../../../assets/Bicycle/block-5/Logo.png';
import icon from '../../../assets/Bicycle/block-5/Icon.png';
import BicycleTextBlock from '../general/Bicycle_textBlock';
import classNames from '../../../lib/classNames';
import inViewport from '../../../lib/Hook_inViewport';

const Block_5 = () => {
  const refPhoto1 = useRef(null);
  const refTextBlock = useRef(null);
  const refPhoto2 = useRef(null);
  const isVisiblePhoto1 = inViewport(refPhoto1, 0.7, undefined, true);
  const isVisiblePhoto2 = inViewport(refPhoto2, 0.7, undefined, true);
  const isVisibleTextBlock = inViewport(refTextBlock, 0.7, undefined, true);

  return (
    <section className="Bicycle-b5">
      <div
        className={classNames('Bicycle-b5__left', {
          'Bicycle-hidden': !isVisiblePhoto1,
          'Bicycle--AnimateAppearFromLeft': isVisiblePhoto1,
        })}
        style={{ backgroundImage: `url(${photo1})` }}
        ref={refPhoto1}
      >
        <div className="Bicycle-b5__left-logo" style={{ backgroundImage: `url(${logo})` }} />
      </div>

      <div
        className={classNames('Bicycle-b5__center', {
          'Bicycle-hidden': !isVisibleTextBlock,
          'Bicycle--AnimateAppearFromBottom': isVisibleTextBlock,
        })}
        ref={refTextBlock}
      >
        <BicycleTextBlock
          icon={icon}
          title="retrò Bike - M. Hulot"
          text={' Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived.'}
          textStyle={{ textAlign: 'justify' }}
        />
        <div className="Bicycle-b5__center--photo1" style={{ backgroundImage: `url(${photo2})` }} />
      </div>

      <div
        className={classNames('Bicycle-b5__right', {
          'Bicycle-hidden': !isVisiblePhoto2,
          'Bicycle--AnimateAppearFromRight': isVisiblePhoto2,
        })}
        ref={refPhoto2}
        style={{ backgroundImage: `url(${photo3})` }}
      />
    </section>
  );
};

Block_5.propTypes = {};

export default Block_5;
