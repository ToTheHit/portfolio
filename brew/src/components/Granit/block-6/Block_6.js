import React, {Component} from 'react';
import './block_6.less'

import pic1 from "../../../assets/Granit/block-6/b6-1.png";
import pic2 from "../../../assets/Granit/block-6/b6-2.png";
import pic3 from "../../../assets/Granit/block-6/b6-3.png";
import Block_6_item from "../block-6/components/Block_6_item";

class Block_6 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            itemsText: [
                {
                    picture: pic1,
                    title: "Аренда самосвала"
                },
                {
                    picture: pic2,
                    title: "Аренда спецтехники"
                },
                {
                    picture: pic3,
                    title: "Рытье траншеи"
                }
            ],
            items: []
        }
    }

    componentDidMount() {
        let items = this.state.itemsText.map(item => {
            return <Block_6_item
                key={Math.random()}
                picture={item.picture}
                title={item.title}
            />
        });
        this.setState({items: items});
    }

    render() {
        return(
            <div className={'granit-b6'}>
                <div className="granit-b6--title">Наши услуги</div>

                <div className="granit-b6--line">
                    {this.state.items}
                </div>

            </div>
        )
    }

}

export default Block_6;
