import React, { forwardRef } from 'react';
import './block_2.less';
import logo from '../../../assets/Bicycle/block-2/Icon.png';

import BicycleTextBlock from '../general/Bicycle_textBlock';
import inViewport from '../../../lib/Hook_inViewport';
import classNames from '../../../lib/classNames';

const Block_2 = forwardRef((props, ref) => {
  const isVisible = inViewport(ref, 0.7, undefined, true);

  return (
    <section className="Bicycle-b2" ref={ref}>
      <BicycleTextBlock
        className={classNames({
          'Bicycle--AnimateAppearFromBottom': isVisible,
          'Bicycle-hidden': !isVisible,
        })}
        icon={logo}
        title="A NEW GENERATION OF VINTAGE BIKE"
        text={'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'}
      />
    </section>
  );
});

Block_2.propTypes = {};

export default Block_2;
