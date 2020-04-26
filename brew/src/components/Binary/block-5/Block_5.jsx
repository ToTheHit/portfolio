import React, { forwardRef } from 'react';
import './block_5.less';
import TextBlock from '../general/TextBlock';

const Block_5 = forwardRef((props, ref) => (
  <section className="Binary-b5" ref={ref}>
    <TextBlock
      title="contact"
      Tag="h2"
    />
    <div className="container">
      <div className="Binary-b5__form">
        <div className="Binary-b5__form-line">
          <div className="Binary-b5__form-item">
            <div className="Binary-b5__form--title">your name</div>
            <div className="Binary-b5__form-box">
              <input className="Binary-b5__form-box--input" type="text" />
            </div>
          </div>
          <div className="Binary-b5__form-item">
            <div className="Binary-b5__form--title">your e-mail</div>
            <div className="Binary-b5__form-box">
              <input className="Binary-b5__form-box--input" type="text" inputMode="email" />
            </div>
          </div>
        </div>

        <div className="Binary-b5__form-message">
          <div className="Binary-b5__form--title">message</div>
          <div className="Binary-b5__form-messageBox">
            <textarea className="Binary-b5__form-messageBox--input" />
          </div>
        </div>
        <button type="button" className="Binary-b5__form-send">send</button>

      </div>
      <div className="Binary-b5__contact">
        <p className="Binary-b5__contact-text">
          Have an idea for a project? Just looking to
          <br />
          explore and see the possibilities?
          <br />
          I&apos;m here to help.
        </p>
        <div className="Binary-b5__contact-signature">
          <b>Postma Elena</b>
        </div>
        <div className="Binary-b5__contact__line">
          <div className="Binary-b5__contact-icon">f</div>
          <div className="Binary-b5__contact-icon">in</div>
        </div>
        <div className="Binary-b5__contact-email">
          e-mail:
          {' '}
          <a href="mailto:postma.elena@gmail.com">postma.elena@gmail.com</a>
        </div>
      </div>
    </div>
  </section>
));

Block_5.propTypes = {};

export default Block_5;
