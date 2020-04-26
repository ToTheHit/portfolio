import React from 'react';
import './empty.less';
/* import {
    CSSTransition,
    TransitionGroup,
} from 'react-transition-group'; */
import ArrowSVG from '../../assets/Advogrand/block-7/b7-arrow.svg'

const Empty = () =>
  /*  const [items, setItems] = useState([
      { id: '1', text: 'Buy eggs' },
      { id: '2', text: 'Pay bills' },
      { id: '3', text: 'Invite friends over' },
      { id: '4', text: 'Fix the TV' },
    ]); */

  (
    <div className="Empty">
      {/*            <TransitionGroup className="todo-list">
                {items.map(({ id, text }) => (
                    <CSSTransition
                        key={id}
                        timeout={500}
                        classNames="item"
                    >
                        <div>
                            <button
                                className="remove-btn"
                                onClick={() =>
                                    setItems(items =>
                                        items.filter(item => item.id !== id)
                                    )
                                }
                            >
                                &times;
                            </button>
                            {text}
                        </div>
                    </CSSTransition>
                ))}
            </TransitionGroup> */}
      <div className="cont">
        <ArrowSVG />

      </div>
      {/*<img src={arrowSVG} alt="" />*/}
    </div>
  );
Empty.propTypes = {};

export default Empty;
