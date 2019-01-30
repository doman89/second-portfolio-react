import React from 'react';
import HeaderNavigationLiElement from './HeaderNavigationLiElement';

const HeaderNavigation = props => {

    const toggleMenuHamburger = event => {
        event.stopPropagation();
        if(event.target.classList.contains('fa-bars')) {
            event.target.classList.toggle('fa-bars--active');
            event.target.nextSibling.classList.toggle('app-header__nav__content--active');
        }else if(event.target.classList.contains('app-header__nav__content__list__item__btn')) {
            console.log(event.target.parentNode.parentNode.childNodes.forEach(
                child => child.firstChild.classList.remove('app-header__nav__content__list__item__btn--active')
            ));
            event.target.classList.add('app-header__nav__content__list__item__btn--active');
            event.target.parentElement.parentElement.parentElement.classList.toggle('app-header__nav__content--active');
            event.target.parentElement.parentElement.parentElement.previousElementSibling.classList.toggle('fa-bars--active');
            props.handleChangeSection(event);
        }
    };

    const handleBackgroundClick = event => {
        event.target.classList.toggle('app-header__nav__content--active');
        if(event.target.previousSibling) event.target.previousSibling.classList.toggle('fa-bars--active');
    };

    return (

        <nav className={'app-header__nav'}>
            <i onClick={toggleMenuHamburger} className={'fas fa-bars'}></i>
            <div className={'app-header__nav__content'} onClick={handleBackgroundClick}>
                <ul className={'app-header__nav__content__list'}>
                    <HeaderNavigationLiElement
                        toggleMenuHamburger={toggleMenuHamburger}
                        content={'welcome!'}
                    />
                    <HeaderNavigationLiElement
                        toggleMenuHamburger={toggleMenuHamburger}
                        content={'about me'}
                    />
                    <HeaderNavigationLiElement
                        toggleMenuHamburger={toggleMenuHamburger}
                        content={'my skills'}
                    />
                    <HeaderNavigationLiElement
                        toggleMenuHamburger={toggleMenuHamburger}
                        content={'my portfolio'}
                    />
                    <HeaderNavigationLiElement
                        toggleMenuHamburger={toggleMenuHamburger}
                        content={'contact'}
                    />
                </ul>
            </div>
        </nav>
    );
};

export default HeaderNavigation;