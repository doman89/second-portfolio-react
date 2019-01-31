import React, {Component} from 'react';

const SubNavigation = props =>{
  return (
    <nav className={'app-nav'}>
        <ul className={'app-nav__list'}>
            <li className={'app-nav__list__item'}>
                <button className={'app-nav__list__item__btn'}>HTML</button>
            </li>
            <li className={'app-nav__list__item'}>
                <button className={'app-nav__list__item__btn'}>CSS</button>
            </li>
            <li className={'app-nav__list__item'}>
                <button className={'app-nav__list__item__btn'}>JavaScript</button>
            </li>
            <li className={'app-nav__list__item'}>
                <button className={'app-nav__list__item__btn'}>React</button>
            </li>
            <li className={'app-nav__list__item'}>
                <button className={'app-nav__list__item__btn'}>English</button>
            </li>
            <li className={'app-nav__list__item'}>
                <button className={'app-nav__list__item__btn'}>First Portfolio</button>
            </li>
        </ul>
    </nav>
  );
};

export default SubNavigation;