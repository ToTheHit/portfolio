import React, {Component} from 'react';
import './block_7.less'

import background from "../../../assets/Granit/block-7/b7-background_1.jpg";
import pic1 from "../../../assets/Granit/block-7/b7-1.svg";
import pic2 from "../../../assets/Granit/block-7/b7-2.svg";
import pic3 from "../../../assets/Granit/block-7/b7-3.svg";

class Block_7 extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidMount() {

    }

    render() {
        return(
            <section className={'granit-b7'} style={{backgroundImage: "url(" + background + ")"}}>
                <div className="granit-b7--content">
                    {/*<span dangerouslySetInnerHTML={{__html: pic2}} className="granit-b7--content_mark"/>*/}
                    <div className="granit-b7--content_contacts">
                        <div className="granit-b7--content_contacts_content">
                            <div className="granit-b7--content_contacts_content--title">контакты</div>

                            <div className="granit-b7--content_contacts_content--phone">
                                <span dangerouslySetInnerHTML={{__html: pic1}} className="granit-b7--content_contacts_content--phone_icon"/>
                                <div className="granit-b7--content_contacts_content--phone_numbers">
                                    <div className="granit-b7--content_contacts_content--phone_numbers_first">8 800 034-23-34</div>
                                    <div className="granit-b7--content_contacts_content--phone_numbers_second">8 495 034-23-34</div>
                                </div>
                            </div>

                            <div className="granit-b7--content_contacts_content--address">
                                <span dangerouslySetInnerHTML={{__html: pic2}} className="granit-b7--content_contacts_content--address_icon"/>
                                <div className="granit-b7--content_contacts_content--address_text">Московская обл. г. Балашиха, пер. Столовой, д.23, кор. 34</div>
                            </div>

                            <div className="granit-b7--content_contacts_content--mail">
                                <span dangerouslySetInnerHTML={{__html: pic3}} className="granit-b7--content_contacts_content--mail_icon"/>
                                <div className="granit-b7--content_contacts_content--mail_text">Info@stroika.ru</div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        )
    }

}

export default Block_7;
