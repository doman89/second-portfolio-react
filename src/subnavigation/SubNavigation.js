import React from 'react';
import SubNavigationList from "./SubNavigationList";

const SubNavigation = props =>{
    const chooseMenu = () => {
        if('welcome' === props.activeSection)
            return (

                <SubNavigationList
                    activeSubSection={props.activeSubSection}
                    handleChangeSubSection={props.handleChangeSubSection}
                    listElements={props.content.welcomeContent.subNavigation}
            />);
        if('aboutMe' === props.activeSection)
            return (
                <SubNavigationList
                    activeSubSection={props.activeSubSection}
                    handleChangeSubSection={props.handleChangeSubSection}
                    listElements={props.content.aboutMeContent.subNavigation}
            />)
    };

    return (
        <nav className={'app-nav'}>
            <ul className={'app-nav__list'}>
                {props.content.welcomeContent ? chooseMenu() : 'data is loading...'}
            </ul>
        </nav>
    );
};

export default SubNavigation;