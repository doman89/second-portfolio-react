import React from 'react';

const SubNavigationButton = props => {

    const chooseClassName = () => {
        return props.elementDataSet === props.activeSubSection ? 'app-nav__list__item__btn--active' : null;
    };

    return (
            <button
                className={`app-nav__list__item__btn ${chooseClassName()}`}
                onClick={props.function}
                data-id={props.elementDataSet}
                data-content={props.textContent}
                >{props.textContent}
            </button>
    );
};

export default SubNavigationButton;