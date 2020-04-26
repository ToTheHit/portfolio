import React from 'react';
import './block_10.less';
import twitterIcon from '../../../assets/Bicycle/block-9/twitter.png';
import facebookIcon from '../../../assets/Bicycle/block-9/facebook.png';
import pinterestIcon from '../../../assets/Bicycle/block-9/pinterest.png';
import logo from '../../../assets/Bicycle/block-9/logo.png';

const Block_10 = () => (
  <footer className="Bicycle-b10">
    <div className="Bicycle-b10__content">
      <div className="Bicycle-b10__content-left">
        <div className="Bicycle-b10__content-left_company">
          AOD New York
        </div>
        <div className="Bicycle-b10__content-left_address">
          2250 Lexington Avenue
          <br />
          New York, NY 10035 - info@domain.com
        </div>
      </div>

      <div className="Bicycle-b10__content-center">
        <div
          className="Bicycle-b10__content-center_icon"
          style={{ backgroundImage: `url(${twitterIcon})` }}
        />
        <div
          className="Bicycle-b10__content-center_icon"
          style={{ backgroundImage: `url(${facebookIcon})` }}
        />
        <div
          className="Bicycle-b10__content-center_icon"
          style={{ backgroundImage: `url(${pinterestIcon})` }}
        />
      </div>

      <div className="Bicycle-b10__content-right">
        <div className="Bicycle-b10__content-right_text">Handcrafted by</div>
        <div
          className="Bicycle-b10__content-right_logo"
          style={{ backgroundImage: `url(${logo})` }}
        />
      </div>
    </div>
  </footer>
);

Block_10.propTypes = {};

export default Block_10;
