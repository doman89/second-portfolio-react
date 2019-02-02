import React from 'react';
import HeaderNavigation from './HeaderNavigation';

const Header = props => {

    return (
      <header className={'app-header'}>
          <div className={'app-header__author-info'}>Mateusz <strong className={'app-header__author-info--surname'}> Domanski</strong></div>
          <HeaderNavigation
              handleChangeSection={props.handleChangeSection}
          />
      </header>
    );
};

export default Header;