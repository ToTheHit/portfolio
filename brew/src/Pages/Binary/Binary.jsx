import React, { useEffect, useRef, useState } from 'react';
import './binary.less';
import classNames from '../../lib/classNames';

import Block_1 from '../../components/Binary/block-1/Block_1';
import Block_2 from '../../components/Binary/block-2/Block_2';
import Block_3 from '../../components/Binary/block-3/Block_3';
import Block_4 from '../../components/Binary/block-4/Block_4';
import Block_5 from '../../components/Binary/block-5/Block_5';
import Block_6 from '../../components/Binary/block-6/Block_6';
import BinaryNenu from '../../components/Binary/general/Menu';

const Binary = () => {
  const refHome = useRef(null);
  const refAboutUs = useRef(null);
  const refPortfolio = useRef(null);
  const refContact = useRef(null);

  const [scrollTo, setScrollTo] = useState(0);
  const [hidden, setHidden] = useState(true);
  // Smooth fade in
  useEffect(() => {
    setHidden(false);
  }, []);

  useEffect(() => {
    switch (scrollTo) {
      case 1:
        refHome.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        break;
      case 2:
        refAboutUs.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        break;
      case 3:
        refPortfolio.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        break;
      case 4:
        refContact.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        break;
      default:
        break;
    }

    return setScrollTo(0);
  }, [scrollTo]);

  return (
    <div className={classNames('Binary', { hidden }, 'wrapper')}>
      <Block_1
        ref={refHome}
        setScrollTo={setScrollTo}
      />
      <main>
        <BinaryNenu
          setScrollTo={setScrollTo}
        />
        <Block_2
          ref={refAboutUs}
        />
        <Block_3
          ref={refPortfolio}
        />
        <Block_4 />
        <Block_5
          ref={refContact}
        />
      </main>
      <Block_6 />
    </div>
  );
};

Binary.propTypes = {};

export default Binary;
