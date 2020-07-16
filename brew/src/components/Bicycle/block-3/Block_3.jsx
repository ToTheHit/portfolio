import React, { forwardRef, useRef } from 'react';
import './block_3.less';
import photo1 from '../../../assets/Bicycle/block-3/bicycle_left.jpg';
import photo2 from '../../../assets/Bicycle/block-3/bicycle_right.jpg';
import icon1 from '../../../assets/Bicycle/block-3/Icon.png';
import icon2 from '../../../assets/Bicycle/block-3/Logo.png';
import BicycleTextBlock from '../general/Bicycle_textBlock';
import inViewport from '../../../lib/Hook_inViewport';
import classNames from '../../../lib/classNames';

const Block_3 = forwardRef((props, ref) => {
  const refPhoto1 = useRef(null);
  const refTextBlock = useRef(null);
  const refPhoto2 = useRef(null);
  const isVisiblePhoto1 = inViewport(refPhoto1, 0.7, undefined, true);
  const isVisiblePhoto2 = inViewport(refPhoto2, 0.7, undefined, true);
  const isVisibleTextBlock = inViewport(refTextBlock, 0.7, undefined, true);

  return (
    <section className="Bicycle-b3" ref={ref}>
      <div
        className={classNames('Bicycle-b3__photo1', {
          'Bicycle-hidden': !isVisiblePhoto1,
          'Bicycle--AnimateAppearFromLeft': isVisiblePhoto1,
        })}
        style={{ backgroundImage: `url(${photo1})` }}
        ref={refPhoto1}
      >
        <div
          className="Bicycle-b3__photo1-logo"
          style={{ backgroundImage: `url(${icon2})` }}
        />
      </div>
      <div className="Bicycle-b3__right">
        <BicycleTextBlock
          className={classNames({
            'Bicycle-hidden': !isVisibleTextBlock,
            'Bicycle--AnimateAppearFromBottom': isVisibleTextBlock,
          })}
          ref={refTextBlock}
          icon={icon1}
          title="vintage Oliva"
          text={'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived.'}
          textStyle={{ textAlign: 'justify' }}
          triangle
        />
        <div
          className={classNames('Bicycle-b3__right--photo2', {
            'Bicycle-hidden': !isVisiblePhoto2,
            'Bicycle--AnimateAppearFromRight': isVisiblePhoto2,
          })}

          ref={refPhoto2}
          style={{ backgroundImage: `url(${photo2})` }}
        />
      </div>
    </section>
  );
});

Block_3.propTypes = {};

export default Block_3;
