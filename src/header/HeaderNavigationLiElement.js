import React from 'react';


const HeaderNavigationLiElements = props => {
    const handleOnClickLi = event => {
        event.stopPropagation();
    };

    return (
      <li onClick={handleOnClickLi}>
          <button
              className={'app-header__nav__content__list__item__btn'}
              onClick={props.toggleMenuHamburger}
              data-id={props.elementDataSet}
              data-content={props.content}
          >
              {props.content}
          </button>
      </li>
    );
};

export default HeaderNavigationLiElements;