import React, { Component } from 'react';
import Header from './header/Header';
import SubNavigation from './subnavigation/SubNavigation';
import Main from "./content/Main";

class App extends Component {

  state={
    headerBottomOffset: 0,
    activeSection: 'welcome!',
  };
  headerOffset = null;

  handleChangeSection = event => {
    console.log(this);
    this.setState({
      activeSection: event.target.textContent,
    });
  };

  handleScroll = event => {
    // console.log(window.pageXOffset);
    console.log(window.scrollY);
    // if(window.querySelector('header').pageYOffset / 2
  };

  render() {
    return (
        <>
          <Header
            handleChangeSection={this.handleChangeSection}
            onScroll={this.handleOnScroll}
          />
          <SubNavigation
          />
          <Main
            activeSection={this.state.activeSection}
          />
        </>
    );
  }

  componentDidMount() {
          window.addEventListener('scroll', this.handleScroll);
  }
  componentWillUnmount() {
          window.removeEventListener('scroll', this.handleScroll);
  }

}

export default App;
