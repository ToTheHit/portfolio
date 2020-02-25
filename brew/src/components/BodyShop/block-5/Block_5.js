import React, {Component} from 'react';

import './block_5.less'
import Block_5_item from "./components/Block_5_item";
import icon from '../../../assets/BodyShop/block-5/b5-pic1.png';


class Block_5 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            reviews: [
                {
                    picture: icon,
                    name: 'Иван Иванович',
                    title: 'Не могу найти фару для авто',
                    description: 'Мотордеталь в широком ассортименте по ценам от известного дистрибьютора автозапчастей. ООО "РАДИАТОР" пользуется заслуженным уважением среди покупателей, благодаря высокому сервису, скидкам, отличному качеству продукции.'
                },
                {
                    picture: icon,
                    name: 'Иван Иванович',
                    title: 'Не могу найти фару для авто',
                    description: 'Мотордеталь в широком ассортименте по ценам от известного дистрибьютора автозапчастей. ООО "РАДИАТОР" пользуется заслуженным уважением среди покупателей, благодаря высокому сервису, скидкам, отличному качеству продукции. '
                },
                {
                    picture: icon,
                    name: 'Иван Иванович',
                    title: 'Не могу найти фару для авто',
                    description: 'Мотордеталь в широком ассортименте по ценам от известного дистрибьютора автозапчастей. ООО "РАДИАТОР" пользуется заслуженным уважением среди покупателей, благодаря высокому сервису, скидкам, отличному качеству продукции.'
                },
                {
                    picture: icon,
                    name: 'Иван Иванович',
                    title: 'Не могу найти фару для авто',
                    description: 'Мотордеталь в широком ассортименте по ценам от известного дистрибьютора автозапчастей. ООО "РАДИАТОР" пользуется заслуженным уважением среди покупателей, благодаря высокому сервису, скидкам, отличному качеству продукции.'
                }
            ],
            reviewRendered: []
        }
    }


    componentDidMount() {
        let reviewRendered = this.state.reviews.map(review => {
            return <Block_5_item
                key={Math.random()}
                picture={review.picture}
                name={review.name}
                title={review.title}
                description={review.description}
            />
        });
        this.setState({reviewRendered: reviewRendered});
    }

    render() {
        return(
            <div className={'bodyShop-b5'}>
                <div className="bodyShop-b5_title">Клиенты о нас</div>
                <div className="bodyShop-b5_reviews">
                    {this.state.reviewRendered}
                </div>
            </div>
        )
    }
}

export default Block_5;