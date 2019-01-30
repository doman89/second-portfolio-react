import React from 'react';


const HeaderNavigationLiElements = props => {
    return (
      <li>
          <button className={'app-header__nav__content__list__item__btn'} onClick={props.toggleMenuHamburger}>{props.content}</button>
      </li>
    );
};

export default HeaderNavigationLiElements;