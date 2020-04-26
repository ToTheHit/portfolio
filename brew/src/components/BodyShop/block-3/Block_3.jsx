import React, { Component } from 'react';

import './block_3.less';

class Block_3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      select: {
        mark: 0,
        model: 0,
        year: 0,
      },

    };
  }

  onChangeHandle(selectType, value) {
    const { select } = this.state;
    select[selectType] = value;
    this.setState(select);
  }

  render() {
    const { select } = this.state;
    return (
      <section className="bodyShop-b3">
        <div className="bodyShop-b3--title">Подробная заявка</div>
        <div className="bodyShop-b3--description">
          Заполните форму и получите максимально точную
          цену!
        </div>
        <div className="bodyShop-b3--form">
          <div className="bodyShop-b3--form_column">
            <form
              action="#"
              className="bodyShop-b3--form_column--input"
            >
              <div className="bodyShop-b3--form_column--input_title">Марка:</div>
              <div className="bodyShop-b3--form_column--input_selector">
                <select
                  value={select.mark}
                  onChange={(e) => this.onChangeHandle('mark', e.target.value)}
                >
                  <option disabled value={0}>Выберите марку</option>
                  <option value={1}>Option 1</option>
                  <option value={2}>Option 2</option>
                  <option value={3}>Option 3</option>
                  <option value={4}>Option 4</option>
                </select>
              </div>
            </form>

            <form
              action="#"
              className="bodyShop-b3--form_column--input"
              style={{ paddingTop: '20px' }}
            >
              <div className="bodyShop-b3--form_column--input_title">
                Модель:
              </div>
              <div className="bodyShop-b3--form_column--input_selector">
                <select
                  value={select.model}
                  onChange={(e) => this.onChangeHandle('model', e.target.value)}
                >
                  <option disabled value={0}>Выберите модель</option>
                  <option value={1}>Option 1</option>
                  <option value={2}>Option 2</option>
                  <option value={3}>Option 3</option>
                  <option value={4}>Option 4</option>
                </select>
              </div>
            </form>

            <form
              action="#"
              className="bodyShop-b3--form_column--input"
              style={{ paddingTop: '20px' }}
            >
              <div className="bodyShop-b3--form_column--input_title" htmlFor="select-year">
                Год
                выпуска:
              </div>
              <div className="bodyShop-b3--form_column--input_selector">
                <select
                  value={select.year}
                  onChange={(e) => this.onChangeHandle('year', e.target.value)}
                >
                  <option disabled value={0}>Выберите год</option>
                  <option value={1}>Option 1</option>
                  <option value={2}>Option 2</option>
                  <option value={3}>Option 3</option>
                  <option value={4}>Option 4</option>
                </select>
              </div>
            </form>
          </div>
          <div className="bodyShop-b3--form_column">
            <div className="bodyShop-b3--form_column--input">
              <div className="bodyShop-b3--form_column--input_title">Необходимые детали:</div>
              <textarea
                className="bodyShop-b3--form_column--input_textArea"
                style={{ height: '110px' }}
                placeholder="Введите"
              />
            </div>
            <div className="bodyShop-b3--form_column--input" style={{ paddingTop: '20px' }}>
              <div className="bodyShop-b3--form_column--input_title">Ваше имя:</div>
              <input
                className="bodyShop-b3--form_column--input_text"
                style={{ height: '40px' }}
                placeholder="Введите"
              />
            </div>
          </div>
          <div className="bodyShop-b3--form_column">
            <div className="bodyShop-b3--form_column--input">
              <div className="bodyShop-b3--form_column--input_title">Ваш телефон:</div>
              <input
                className="bodyShop-b3--form_column--input_text"
                style={{ height: '40px' }}
                placeholder="Введите"
              />
            </div>
            <div className="bodyShop-b3--form_column--input" style={{ paddingTop: '20px' }}>
              <div className="bodyShop-b3--form_column--input_title">Ваш e-mail:</div>
              <input
                className="bodyShop-b3--form_column--input_text"
                style={{ height: '40px' }}
                placeholder="Введите"
              />
            </div>
            <div className="bodyShop-b3--form_column--button">Узнать цену</div>
          </div>
        </div>
      </section>
    );
  }
}

export default Block_3;
