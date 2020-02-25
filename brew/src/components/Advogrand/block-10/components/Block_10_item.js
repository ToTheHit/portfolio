import React, {Component} from 'react';

import './block_10_item.less'
import PropTypes from "prop-types";
import Block_10_item_list from "./Block_10_item_list";

class Block_10_item extends Component {
    constructor(props) {
        super(props);
        this.state = {
            renderedList: []
        };
    }

    componentDidMount() {
        let renderedList = this.props.listOfServices.map((service, index) => {
            return <Block_10_item_list
                key={Math.random()}
                service={service}
                time={(this.props.listOfTimes[index] ? this.props.listOfTimes[index] : '')}
                extra={(!this.props.listOfTimes[index])}
            />
        });
        this.setState({renderedList: renderedList});
    }

    render() {
        return (
            <div className={'Advogrand-b10_item'}>
                <div className="Advogrand-b10_item--content">
                    <div className="Advogrand-b10_item--content-up">
                        <div className="Advogrand-b10_item--content-up_title">{this.props.title}<br/><b>{this.props.cardName}</b></div>
                        <div className="Advogrand-b10_item--content-up_picture" style={{backgroundImage: "url(" + this.props.picture + ")"}}/>
                        <div className="Advogrand-b10_item--content-up_services">
                            {this.state.renderedList}
                        </div>
                    </div>
                    <div className="Advogrand-b10_item--content-down">
                        <div className="Advogrand-b10_item--content-down_cost">
                            <div className="Advogrand-b10_item--content-down_cost-text">Цена:</div>
                            <div className="Advogrand-b10_item--content-down_cost-digit">{this.props.cost}</div>
                        </div>
                        <div className="Advogrand-b10_item--content-down_buttons">
                            <div className="Advogrand-b10_item--content-down_buttons-consult"
                                style={{backgroundImage: "linear-gradient(to top, " + this.props.colors[0] + ", " + this.props.colors[1] +")"}}
                            >Консультация</div>
                            <div className="Advogrand-b10_item--content-down_buttons-buy">Купить</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

Block_10_item.propTypes = {
    title: PropTypes.string,
    cardName: PropTypes.string,
    picture: PropTypes.string,
    listOfServices: PropTypes.arrayOf(PropTypes.string),
    listOfTimes: PropTypes.arrayOf(PropTypes.string),
    cost: PropTypes.string,
    colors: PropTypes.arrayOf(PropTypes.string)
};

export default Block_10_item;