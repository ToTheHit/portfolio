import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './block_8_item.less';

const Block_8_item = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const {
    index, description, title, setActiveDescription, activeDescription,
  } = props;
  useEffect(() => {
    setIsOpen(activeDescription === index);
  }, [activeDescription]);

  return (
    <li>
      <span className="Belaz-b8-item">
        <button
          type="button"
          className={`Belaz-b8-item_title ${isOpen ? 'active' : ''}`}
          onClick={() => {
            setActiveDescription(props.index);
          }}
        >
          {title}
        </button>
        <div
          className="Belaz-b8-item_description"
          style={{
            visibility: (isOpen ? 'visible' : 'hidden'),
            opacity: (isOpen ? 1 : 0),
          }}
        >
          <div className="Belaz-b8-item_description-text">
            {
              description.split('<br/>').map((item) => (
                <span key={Math.random()}>
                  {item}
                  <br />
                </span>
              ))
            }
          </div>
          <div className="Belaz-b8-item_description-close">
            <button
              type="button"
              className="Belaz-b8-item_description-close_icon"
              onClick={() => {
                setActiveDescription(-1);
              }}
            >
              X
            </button>
          </div>
        </div>
      </span>
    </li>
  );
};

Block_8_item.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  setActiveDescription: PropTypes.func.isRequired,
  activeDescription: PropTypes.number.isRequired,
};

export default Block_8_item;
