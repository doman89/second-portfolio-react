import React from 'react';
import HeaderNavigationLiElement from './HeaderNavigationLiElement';

class HeaderNavigation extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            mobileMenuActive: false,
        };
        this.widthForDesktop = false;
    }

    isWidthForDesktop = () =>{
        if(window.innerWidth < 768 && this.widthForDesktop){
            this.widthForDesktop = false;
        }else if(window.innerWidth >= 768 && !this.widthForDesktop){
            this.widthForDesktop = true;
            this.setState({
               mobileMenuActive: false,
            });
        }
    };

    toggleMenuHamburger = event => {
        event.stopPropagation();
        if(!this.widthForDesktop){
            this.setState(prevState =>({
                mobileMenuActive: !prevState.mobileMenuActive,
            }));
        }else{
            this.setState({
                mobileMenuActive: false,
            })
        }
        if(event.target.dataset.id) {
            this.props.handleChangeSection(event);
        }
    };

    choosingClassName = (nameOfClass, negationResult = false) => {
        return this.state.mobileMenuActive !== negationResult ?
            `${nameOfClass} ${nameOfClass}--active` :
            nameOfClass;
    };

    render(){
    return (
        <nav className={'app-header__nav'}>
            <i
                onClick={this.toggleMenuHamburger}
                className={this.choosingClassName('fas fa-bars')}>
            </i>
            <div
                className={this.choosingClassName('app-header__nav__content')}
                onClick={this.toggleMenuHamburger}
            >
                <ul
                    className={'app-header__nav__content__list'}
                    onClick={this.toggleMenuHamburger}
                >
                    <HeaderNavigationLiElement
                        toggleMenuHamburger={this.toggleMenuHamburger}
                        activeSection={this.props.activeSection}
                        elementDataSet={'welcome'}
                        content={this.props.content ? this.props.content.welcome : 'data is loading'}
                    />
                    <HeaderNavigationLiElement
                        toggleMenuHamburger={this.toggleMenuHamburger}
                        activeSection={this.props.activeSection}
                        elementDataSet={'aboutMe'}
                        content={this.props.content ? this.props.content.aboutMe : 'data is loading'}
                    />
                    <HeaderNavigationLiElement
                        toggleMenuHamburger={this.toggleMenuHamburger}
                        activeSection={this.props.activeSection}
                        elementDataSet={'mySkills'}
                        content={this.props.content ? this.props.content.mySkills : 'data is loading'}
                    />
                    <HeaderNavigationLiElement
                        toggleMenuHamburger={this.toggleMenuHamburger}
                        activeSection={this.props.activeSection}
                        elementDataSet={'myPortfolio'}
                        content={this.props.content ? this.props.content.myPortfolio : 'data is loading'}
                    />
                    <HeaderNavigationLiElement
                        toggleMenuHamburger={this.toggleMenuHamburger}
                        activeSection={this.props.activeSection}
                        elementDataSet={'contact'}
                        content={this.props.content ? this.props.content.contact : 'data is loading'}
                    />
                </ul>
            </div>
        </nav>
        );
    }

    componentDidMount() {
        window.innerWidth < 768 ?
            this.widthForDesktop = false :
            this.widthForDesktop = true;
        window.addEventListener('resize', this.isWidthForDesktop);
    };

    componentWillUnmount() {
        window.removeEventListener('resize', this.isWidthForDesktop);
    };
}

export default HeaderNavigation;