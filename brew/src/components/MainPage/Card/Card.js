import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './card.less';
import Layout from "../../InstantBrew/Layout/Layout";
import Title from "../../InstantBrew/Title/Title";
import Paragraph from "../../InstantBrew/Paragraph/Paragraph";
import { Link, Redirect } from "react-router-dom";

class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: false
        };
    }

    handleRedirect() {
        this.props.changeHide(true);
        setTimeout(() => {
            this.setState({redirect: true})
        }, 300)
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to={this.props.link} push={true}/>
        }

        return(
            <Layout className={'Card'}>
                <div to={this.props.link} style={{ textDecoration: 'none' }} onClick={() => this.handleRedirect()}>
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
                </div>
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