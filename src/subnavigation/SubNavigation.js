import React, {Component} from 'react';
import SubNavigationButton from './SubNavigationButton';

const SubNavigation = props =>{
  return (
    <nav className={'app-nav'}>
        <ul className={'app-nav__list'}>
            <li className={'app-nav__list__item'}>
                {/*<SubNavigationButton textContent={'Doman'}/>*/}
            </li>
        </ul>
    </nav>
  );
};

export default SubNavigation;