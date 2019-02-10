import React from 'react';
import SubNavigationButton from './SubNavigationButton';

const SubNavigationList = props => {
    const menuItems = props.listElements.map( element => (
        <li className={'app-nav__list__item'} key={element[0]}>
           <SubNavigationButton
               textContent={element[1]}
               activeSubSection={props.activeSubSection}
               function={props.handleChangeSubSection}
               elementDataSet={element[0]}
           />
        </li>
    ));

    return (
        <>
            {menuItems}
        </>
    );
};

export default SubNavigationList;