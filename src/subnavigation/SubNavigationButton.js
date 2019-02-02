import React from 'react';

const SubNavigationButton = props => {
    return (
        <button className={'app-nav__list__item__btn'}>{props.textContent}
        </button>
    );
};

export default SubNavigationButton;