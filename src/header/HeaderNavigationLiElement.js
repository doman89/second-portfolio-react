import React from 'react';

const HeaderNavigationLiElements = props =>{

    const chooseClassName = () => {
        const {elementDataSet, activeSection} = props;
        return elementDataSet === activeSection ? 'app-header__nav__content__list__item__btn--active' : null;
    };

    return (
        <li>
            <button
                className={`app-header__nav__content__list__item__btn ${chooseClassName()}`}
                onClick={props.toggleMenuHamburger}
                data-id={props.elementDataSet}
                data-content={props.content}
            >
                {props.content}
            </button>
        </li>
    )
};

export default HeaderNavigationLiElements;