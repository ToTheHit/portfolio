import React, { Component } from 'react';

import './block_10_item.less';
import PropTypes from 'prop-types';
import Block_10_item_list from './Block_10_item_list';

class Block_10_item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      renderedList: [],
    };
  }

  componentDidMount() {
    const { listOfTimes, listOfServices } = this.props;
    const renderedList = listOfServices.map((service, index) => (
      <Block_10_item_list
        key={Math.random()}
        service={service}
        time={(listOfTimes[index] ? listOfTimes[index] : '')}
        extra={(!listOfTimes[index])}
      />
    ));
    this.setState({ renderedList });
  }

  render() {
    const {
      title, cardName, picture, cost, colors,
    } = this.props;
    const { renderedList } = this.state;
    return (
      <div className="Advogrand-b10_item">
        <div className="Advogrand-b10_item--content">
          <div className="Advogrand-b10_item--content-up">
            <div className="Advogrand-b10_item--content-up_title">
              {title}
              <br />
              <b>{cardName}</b>
            </div>
            <div
              className="Advogrand-b10_item--content-up_picture"
              style={{ backgroundImage: `url(${picture})` }}
            />
            <div className="Advogrand-b10_item--content-up_services">
              {renderedList}
            </div>
          </div>
          <div className="Advogrand-b10_item--content-down">
            <div className="Advogrand-b10_item--content-down_cost">
              <div className="Advogrand-b10_item--content-down_cost-text">Цена:</div>
              <div className="Advogrand-b10_item--content-down_cost-digit">{cost}</div>
            </div>
            <div className="Advogrand-b10_item--content-down_buttons">
              <div
                className="Advogrand-b10_item--content-down_buttons-consult"
                style={{ backgroundImage: `linear-gradient(to top, ${colors[0]}, ${colors[1]})` }}
              >
                Консультация
              </div>
              <div className="Advogrand-b10_item--content-down_buttons-buy">Купить</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Block_10_item.propTypes = {
  title: PropTypes.string,
  cardName: PropTypes.string,
  picture: PropTypes.string,
  listOfServices: PropTypes.arrayOf(PropTypes.string),
  listOfTimes: PropTypes.arrayOf(PropTypes.string),
  cost: PropTypes.string,
  colors: PropTypes.arrayOf(PropTypes.string),
};

Block_10_item.defaultProps = {
  title: '',
  cardName: '',
  picture: '',
  listOfServices: [''],
  listOfTimes: [''],
  cost: '',
  colors: [''],
};


export default Block_10_item;
