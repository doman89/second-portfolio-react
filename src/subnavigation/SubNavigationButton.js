import React from 'react';

const SubNavigationButton = props => {
    return (
        <li className={'app-nav__list__item'}>
            <button
                className={'app-nav__list__item__btn'}
                onClick={props.function}
                data-id={props.elementDataSet}
                >{props.textContent}
            </button>
        </li>
    );
};

export default SubNavigationButton;