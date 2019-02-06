import React from 'react';
import HeaderNavigationLiElement from './HeaderNavigationLiElement';

class HeaderNavigation extends React.Component {
    componentDidMount() {
        document.querySelector('.app-header__nav__content__list__item__btn')
            .classList.toggle('app-header__nav__content__list__item__btn--active');
    }

    toggleMenuHamburger = event => {
        event.stopPropagation();
        if(event.target.classList.contains('fa-bars')) {
            event.target.classList.toggle('fa-bars--active');
            event.target.nextSibling.classList.toggle('app-header__nav__content--active');
        }else if(event.target.classList.contains('app-header__nav__content__list__item__btn')) {
            event.target.parentNode.parentNode.childNodes.forEach(
                child => child.firstChild.classList.remove('app-header__nav__content__list__item__btn--active')
            );
            event.target.classList.add('app-header__nav__content__list__item__btn--active');
            event.target.parentElement.parentElement.parentElement.classList.toggle('app-header__nav__content--active');
            event.target.parentElement.parentElement.parentElement.previousElementSibling.classList.toggle('fa-bars--active');
            this.props.handleChangeSection(event);
        }
    };

    handleBackgroundClick = event => {
        if(event.target.classList.contains("app-header__nav__content__list"))
            event.target = event.target.parentNode;
        event.target.classList.toggle('app-header__nav__content--active');
        if(event.target.previousSibling)
            event.target.previousSibling.classList.toggle('fa-bars--active');
    };
    render(){
    return (
        <nav className={'app-header__nav'}>
            <i onClick={this.toggleMenuHamburger} className={'fas fa-bars'}></i>
            <div className={'app-header__nav__content'} onClick={this.handleBackgroundClick}>
                <ul className={'app-header__nav__content__list'}>
                    <HeaderNavigationLiElement
                        toggleMenuHamburger={this.toggleMenuHamburger}
                        content={'welcome!'}
                        elementDataSet={'welcome'}
                    />
                    <HeaderNavigationLiElement
                        toggleMenuHamburger={this.toggleMenuHamburger}
                        content={'about me'}
                        elementDataSet={'aboutMe'}
                    />
                    <HeaderNavigationLiElement
                        toggleMenuHamburger={this.toggleMenuHamburger}
                        content={'my skills'}
                        elementDataSet={'mySkills'}
                    />
                    <HeaderNavigationLiElement
                        toggleMenuHamburger={this.toggleMenuHamburger}
                        content={'my portfolio'}
                        elementDataSet={'myPortfolio'}
                    />
                    <HeaderNavigationLiElement
                        toggleMenuHamburger={this.toggleMenuHamburger}
                        content={'contact'}
                        elementDataSet={'contact'}
                    />
                </ul>
            </div>
        </nav>
    );
    }
};

export default HeaderNavigation;