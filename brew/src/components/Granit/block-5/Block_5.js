import React, {Component} from 'react';
import './block_5.less'

import pic1 from "../../../assets/Granit/block-5/b5-1.png";
import pic2 from "../../../assets/Granit/block-5/b5-2.png";
import pic3 from "../../../assets/Granit/block-5/b5-3.png";
import pic4 from "../../../assets/Granit/block-5/b5-4.png";
import Block_5_item from "./components/Block_5_item";


class Block_5 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            itemsText: [
                {
                    picture: pic1,
                    title: "Гранитный щебень 5-20 мм",
                    costOld: "1 500 р./т",
                    costNew: "1 350 р./т",
                },
                {
                    picture: pic2,
                    title: "Гранитный щебень 5-20 мм",
                    costOld: "1 500 р./т",
                    costNew: "1 350 р./т",
                },
                {
                    picture: pic3,
                    title: "Гранитный щебень 5-20 мм",
                    costOld: null,
                    costNew: "1 350 р./т",
                },
                {
                    picture: pic4,
                    title: "Гранитный щебень 5-20 мм",
                    costOld: null,
                    costNew: "1 350 р./т",
                }
            ],
            items: []
        }
    }

    componentDidMount() {
        let items = this.state.itemsText.map(item => {
            return <Block_5_item
                key={Math.random()}
                picture={item.picture}
                title={item.title}
                costOld={item.costOld}
                costNew={item.costNew}
            />
        });
        this.setState({items: items});
    }

    render() {
        return(
            <div className={'granit-b5'}>
                <div className="granit-b5--title">Популярные товары</div>
                <div className="granit-b5--line">
                    {this.state.items}
                </div>
            </div>
        )
    }

}

export default Block_5;
