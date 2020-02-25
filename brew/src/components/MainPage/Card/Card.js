import React, {Component} from 'react';
import {  Link, fade } from "react-tiger-transition";
import PropTypes from 'prop-types';

import './card.less';
import Layout from "../../InstantBrew/Layout/Layout";
import Title from "../../InstantBrew/Title/Title";
import Paragraph from "../../InstantBrew/Paragraph/Paragraph";
// import { Link } from "react-router-dom";

class Card extends Component {

    render() {
        return(
            <Layout className={'Card'}>
                <Link to={this.props.link} style={{ textDecoration: 'none' }} transition='default-fade'>
                    <div className={'Card_picture'} style={{backgroundImage: "url("+ this.props.pictureURL +")"}} />

                    <div className={'Card_title'}>
                        <Title>
                            {this.props.title}
                        </Title>
                    </div>

                    <div className={'Card_dot'}/>
                    <div className={'Card_description'}>
                        <Paragraph>
                            {this.props.description}
                        </Paragraph>
                    </div>
                </Link>
            </Layout>
        )
    }
}


Card.propTypes = {
    theme: PropTypes.oneOf(['dark', 'light']),
    title: PropTypes.string,
    description: PropTypes.string,
    pictureURL: PropTypes.string,
    link: PropTypes.string
};


export default Card;