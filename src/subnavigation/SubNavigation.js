import React from 'react';
import SubNavigationWelcome from "./SubNavigationWelcome";

const SubNavigation = props =>{
    const chooseMenu = () => {
        if('welcome' === props.activeSection)
            return (
                <SubNavigationWelcome
                    language={props.language}
                    handleChangeLanguage={props.handleChangeLanguage}
                />)
    };

    return (
        <nav className={'app-nav'}>
            <ul className={'app-nav__list'}>
                {chooseMenu()}
            </ul>
        </nav>
    );
};

export default SubNavigation;