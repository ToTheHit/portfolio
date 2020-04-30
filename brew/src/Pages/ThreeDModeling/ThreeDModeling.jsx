import React, { useEffect, useState } from 'react';
import './threeDModeling.less';

import Section_1 from '../../components/ThreeDModeling/section-1/Section_1';
import Section_2 from '../../components/ThreeDModeling/section-2/Section_2';
import Section_3 from '../../components/ThreeDModeling/section-3/Section_3';
import Section_4 from '../../components/ThreeDModeling/section-4/Section_4';
import Section_5 from '../../components/ThreeDModeling/section-5/Section_5';
import Section_6 from '../../components/ThreeDModeling/section-6/Section_6';
import Section_7 from '../../components/ThreeDModeling/section-7/Section_7';
import Section_8 from '../../components/ThreeDModeling/section-8/Section_8';
import Section_9 from '../../components/ThreeDModeling/section-9/Section_9';
import Section_10 from '../../components/ThreeDModeling/section-10/Section_10';
import Section_11 from '../../components/ThreeDModeling/section-11/Section_11';
import Section_12 from '../../components/ThreeDModeling/section-12/Section_12';

import classNames from '../../lib/classNames';

const ThreeDModeling = () => {
  const [hidden, setHidden] = useState(true);
  // Smooth fade in
  useEffect(() => {
    setHidden(false);
  }, []);

  return (
    <div className={classNames('ThreeDModeling', { hidden })}>
      <Section_1 />
      <main>
        <Section_2 />
        <Section_3 />
        <Section_4 />
        <Section_5 />
        <Section_6 />
        <Section_7 />
        <Section_8 />
        <Section_9 />
        <Section_10 />
        <Section_11 />
      </main>
      <Section_12 />

    </div>
  );
};

ThreeDModeling.propTypes = {};

export default ThreeDModeling;
