import React, { forwardRef } from 'react';
import './block_7.less';
import photo1 from '../../../assets/Bicycle/block-7/pic1.jpg';
import photo2 from '../../../assets/Bicycle/block-7/pic2.jpg';
import photo3 from '../../../assets/Bicycle/block-7/pic3.jpg';
import photo4 from '../../../assets/Bicycle/block-7/pic4.jpg';
import photo5 from '../../../assets/Bicycle/block-7/pic5.jpg';
import photo6 from '../../../assets/Bicycle/block-7/pic6.jpg';
import photo7 from '../../../assets/Bicycle/block-7/pic7.jpg';
import photo8 from '../../../assets/Bicycle/block-7/pic8.jpg';
import logo from '../../../assets/Bicycle/block-7/logo.png';

const Block_7 = forwardRef((props, ref) => (
  <section className="Bicycle-b7" ref={ref}>
    <div className="Bicycle-b7__left">
      <div className="Bicycle-b7__left-line">
        <div
          className="Bicycle-b7__left-line_photo"
          style={{ backgroundImage: `url(${photo1})` }}
        >
          <div className="shopNow">
            <div className="shopNow-logo" style={{ backgroundImage: `url(${logo})` }} />
            <div className="shopNow-text">SHOP NOW</div>
          </div>
        </div>
        <div
          className="Bicycle-b7__left-line_photo"
          style={{ backgroundImage: `url(${photo2})` }}
        >
          <div className="shopNow">
            <div className="shopNow-logo" style={{ backgroundImage: `url(${logo})` }} />
            <div className="shopNow-text">SHOP NOW</div>
          </div>
        </div>
      </div>
      <div className="Bicycle-b7__left_photo" style={{ backgroundImage: `url(${photo3})` }}>
        <div className="shopNow">
          <div className="shopNow-logo" style={{ backgroundImage: `url(${logo})` }} />
          <div className="shopNow-text">SHOP NOW</div>
        </div>
      </div>
    </div>

    <div className="Bicycle-b7__center">
      <div
        className="Bicycle-b7__center-photo"
        style={{ backgroundImage: `url(${photo4})` }}
      >
        <div className="shopNow">
          <div className="shopNow-logo" style={{ backgroundImage: `url(${logo})` }} />
          <div className="shopNow-text">SHOP NOW</div>
        </div>
      </div>
      <div
        className="Bicycle-b7__center-photo"
        style={{ backgroundImage: `url(${photo5})` }}
      >
        <div className="shopNow">
          <div className="shopNow-logo" style={{ backgroundImage: `url(${logo})` }} />
          <div className="shopNow-text">SHOP NOW</div>
        </div>
      </div>
    </div>

    <div className="Bicycle-b7__right">
      <div className="Bicycle-b7__right_photo" style={{ backgroundImage: `url(${photo6})` }}>
        <div className="shopNow">
          <div className="shopNow-logo" style={{ backgroundImage: `url(${logo})` }} />
          <div className="shopNow-text">SHOP NOW</div>
        </div>
      </div>
      <div className="Bicycle-b7__right-line">
        <div
          className="Bicycle-b7__right-line_photo"
          style={{ backgroundImage: `url(${photo7})` }}
        >
          <div className="shopNow">
            <div className="shopNow-logo" style={{ backgroundImage: `url(${logo})` }} />
            <div className="shopNow-text">SHOP NOW</div>
          </div>
        </div>
        <div
          className="Bicycle-b7__right-line_photo"
          style={{ backgroundImage: `url(${photo8})` }}
        >
          <div className="shopNow">
            <div className="shopNow-logo" style={{ backgroundImage: `url(${logo})` }} />
            <div className="shopNow-text">SHOP NOW</div>
          </div>
        </div>
      </div>
    </div>
  </section>
));

Block_7.propTypes = {};

export default Block_7;
