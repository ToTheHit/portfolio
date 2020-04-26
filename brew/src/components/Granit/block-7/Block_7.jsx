import React, { Component } from 'react';
import './block_7.less';

import background from '../../../assets/Granit/block-7/b7-background_1.jpg';
import Pic1 from '../../../assets/Granit/block-7/b7-1.svg';
import Pic2 from '../../../assets/Granit/block-7/b7-2.svg';
import Pic3 from '../../../assets/Granit/block-7/b7-3.svg';

class Block_7 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <section className="granit-b7" style={{ backgroundImage: `url(${background})` }}>
        <div className="granit-b7--content">
          <div className="granit-b7--content_contacts">
            <div className="granit-b7--content_contacts_content">
              <div className="granit-b7--content_contacts_content--title">контакты</div>

              <div className="granit-b7--content_contacts_content--phone">
                <div
                  className="granit-b7--content_contacts_content--phone_icon"
                >
                  <Pic1 />
                </div>
                <div className="granit-b7--content_contacts_content--phone_numbers">
                  <div className="granit-b7--content_contacts_content--phone_numbers_first">
                    8 800 034-23-34
                  </div>
                  <div className="granit-b7--content_contacts_content--phone_numbers_second">
                    8 495 034-23-34
                  </div>
                </div>
              </div>

              <div className="granit-b7--content_contacts_content--address">
                <div
                  className="granit-b7--content_contacts_content--address_icon"
                >
                  <Pic2 />
                </div>
                <div className="granit-b7--content_contacts_content--address_text">
                  Московская обл.
                  г. Балашиха, пер. Столовой, д.23, кор. 34
                </div>
              </div>

              <div className="granit-b7--content_contacts_content--mail">
                <div
                  className="granit-b7--content_contacts_content--mail_icon"
                >
                  <Pic3 />
                </div>
                <a
                  href="mailto:info@stroika.ru"
                  className="granit-b7--content_contacts_content--mail_text"
                >
                  Info@stroika.ru
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>
    );
  }
}

export default Block_7;
