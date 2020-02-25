import React, {useEffect, useState, useRef} from 'react';
import PropTypes from "prop-types";
import './block_8.less';
import photo from '../../../assets/Belaz/block-8/photo.png';
import reloadIcon from '../../../assets/Belaz/block-8/reload.svg';
import Block_8_item from "./components/Block_8_item";

const Block_8 = (props) => {

    let itemContent = [
        {
            title: 'Как заказать деталь правильно?',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br/><br/>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        },
        {
            title: 'Что делать, если запчасть не понадобилась?',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br/><br/>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        },
        {
            title: 'В чем преимущества оригинальных деталей?',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br/><br/>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        },
        {
            title: 'В чем преимущества оригинальных деталей?',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br/><br/>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        },
        {
            title: 'В чем преимущества оригинальных деталей?',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br/><br/>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        }
    ];

    let [itemObject, setItemObject] = useState([]);
    let [activeDescription, setActiveDescription] = useState(-1);

    useEffect(() => {
        setItemObject(itemContent)
    }, []);
/*
    useEffect(() => {
        let renderedItems = itemObject.map((item, index) => {
            return (
                <Block_8_item
                    key={Math.random()}
                    index={index}
                    title={item.title}
                    description={item.description}
                    activeDescription={activeDescription}
                    setActiveDescription={setActiveDescription}
                />
            )
        });
        setItems(renderedItems);
    }, [itemObject.length]);
*/

    return (
        <div className={'Belaz-b8'}>
            <div className="Belaz-b8__content">
                <div className="Belaz-b8__content--title">
                    У Вас остались вопросы?
                    <div className="Belaz-b8__content--title_subtitle">На ваши вопросы отвечает Эдуард</div>
                </div>
                <div className="Belaz-b8__content--block">
                    <div className="Belaz-b8__content--block_left">
                        <ul>
                            {
                                itemObject.map((item, index) => {
                                    return (
                                        <Block_8_item
                                            key={Math.random()}
                                            index={index}
                                            title={item.title}
                                            description={item.description}
                                            activeDescription={activeDescription}
                                            setActiveDescription={setActiveDescription}
                                        />
                                    )})
                            }
                        </ul>

                        <div className="Belaz-b8__content--block_left--question">
                            <div className="Belaz-b8__content--block_left--question_icon" dangerouslySetInnerHTML={{__html: reloadIcon}}/>
                            <div className="Belaz-b8__content--block_left--question_text">Еще вопросы</div>
                        </div>
                    </div>

                    <div className="Belaz-b8__content--block_right" >
                        <div className="Belaz-b8__content--block_right--photo" style={{backgroundImage: "url(" + photo + ")"}}>
                            <div className="Belaz-b8__content--block_right--photo_sign">
                                Эдуард Викторович,<br/>Директор ООО "Eddie`s-Car"
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

Block_8.propTypes = {};

export default Block_8;