import React, {Component} from 'react';

import './block_8.less';
import pic1 from '../../../assets/Advogrand/block-7/b7-1.jpg';
import pic2 from '../../../assets/Advogrand/block-7/b7-2.jpg';
import pic3 from '../../../assets/Advogrand/block-7/b7-3.jpg';
import Block_8_item from "./components/Block_8_item";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


const category = {"health": 0, "business": 1, "family": 2, "communalServices": 3, "property": 4, "all": 5};
Object.freeze(category);



class Block_8 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentCategory: 1,
            items: [
                {
                    picture: pic1,
                    description: 'Длинное название видеоролика в две строки просто длинное'
                },
                {
                    picture: pic2,
                    description: 'Название видеоролика'
                },
                {
                    picture: pic3,
                    description: 'Длинное название видеоролика в две строки очень длинное'
                },
                {
                    picture: pic1,
                    description: 'Длинное название видеоролика в две строки просто длинное'
                },
                {
                    picture: pic2,
                    description: 'Название видеоролика'
                },
                {
                    picture: pic3,
                    description: 'Длинное название видеоролика в две строки очень длинное'
                },


            ],
            renderedItems: []

        };
        this.getSectionRef = this.getSectionRef.bind(this);
    }

    getSectionRef(el){
        this.sectionRef = el;
    };

    componentDidMount() {
        let renderedItems = this.state.items.map(item => {
            return <Block_8_item
                key={Math.random()}
                picture={item.picture}
                description={item.description}
            />
        });
        this.setState({renderedItems: renderedItems});
    }

    render() {
        return (
            <section className={'Advogrand-b8'} ref={this.getSectionRef}>
                <div className="Advogrand-b8_title">Отзывы</div>
                <div className="Advogrand-b8_category">
                    <div className={this.state.currentCategory === category.health ? "Advogrand-b8_category--item Advogrand-b8_category--item_active" : "Advogrand-b8_category--item"}
                        onClick={() => {this.setState({currentCategory: category.health})}}
                    >здравоохранение</div>
                    <div className={this.state.currentCategory === category.business ? "Advogrand-b8_category--item Advogrand-b8_category--item_active" : "Advogrand-b8_category--item"}
                         onClick={() => {this.setState({currentCategory: category.business})}}
                    >бизнес</div>
                    <div className={this.state.currentCategory === category.family ? "Advogrand-b8_category--item Advogrand-b8_category--item_active" : "Advogrand-b8_category--item"}
                         onClick={() => {this.setState({currentCategory: category.family})}}
                    >семья</div>
                    <div className={this.state.currentCategory === category.communalServices ? "Advogrand-b8_category--item Advogrand-b8_category--item_active" : "Advogrand-b8_category--item"}
                         onClick={() => {this.setState({currentCategory: category.communalServices})}}
                    >жкх</div>
                    <div className={this.state.currentCategory === category.property ? "Advogrand-b8_category--item Advogrand-b8_category--item_active" : "Advogrand-b8_category--item"}
                         onClick={() => {this.setState({currentCategory: category.property})}}
                    >недвижимость</div>
                    <div className={this.state.currentCategory === category.all ? "Advogrand-b8_category--item Advogrand-b8_category--item_active" : "Advogrand-b8_category--item"}
                         onClick={() => {this.setState({currentCategory: category.all})}}
                    >все</div>
                </div>

                <Slider className='Advogrand-b8_videoRaw'
                    dots={true}
                    infinite={true}
                    speed={500}
                    slidesToShow={3}
                    slidesToScroll={1}
                    variableWidth={true}
                    draggable={false}
                >
                    {this.state.renderedItems}
                </Slider>
            </section>
        )
    }
}

export default Block_8;