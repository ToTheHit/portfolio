import React from 'react';
import './block_1.less';
import Block_1_logo from '../../../assets/Belaz/block-1/logo.png';

const Block_1 = () => (
  <header className="Belaz-b1">
    <div className="Belaz-b1__content">
      <div
        className="Belaz-b1__content--logo"
        style={{ backgroundImage: `url(${Block_1_logo})` }}
      />
      <div className="Belaz-b1__content--time">
        <div className="Belaz-b1__content_time-firstLine">с 9:00 до 21:00</div>
        <div className="Belaz-b1__content_time-secondLine">без выходных</div>
      </div>
      <div className="Belaz-b1__content_phoneCall">
        <div className="Belaz-b1__content_phoneCall-numberList">
          <div className="Belaz-b1__content_phoneCall-numberList--number">
            +7 (818) 247-47-25
          </div>
          <div className="Belaz-b1__content_phoneCall-numberList--number">
            +7 (818) 247-47-25
          </div>
        </div>
        <div className="Belaz-b1__content_phoneCall--button">заказать звонок</div>
      </div>
    </div>
  </header>
);

export default Block_1;
