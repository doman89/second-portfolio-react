import React, { Component } from 'react';
import Header from './header/Header';
import SubNavigation from './subnavigation/SubNavigation';
import Main from "./content/Main";

class App extends Component {

  state = {
      headerBottomOffset: 0,
      activeSection: 'welcome',
      activeSubSection: '',
      language: 'en'
  };

    handleChangeLanguage = event => {
        this.setState({
                language: event.target.dataset.id,
            })
    };
  headerOffset = null;

  handleChangeSection = event => {
    this.setState({
      activeSection: event.target.dataset.id,
    });
  };
    handleChangeSubSection = event => {
        this.setState({
            activeSubSection: event.target.dataset.id,
        });
    };

  // handleScroll = event => {
  //   console.log(this.headerQuery);
  //   this.headerQuery.style.backgroundColor = 'rgba(200, 200, 200, 1)';
  //   console.log(window.scrollY);
  //   // if(window.querySelector('header').pageYOffset / 2
  // };

  render() {
    return (
        <>
          <Header
              activeSection={this.state.activeSection}
              activeSubSection={this.state.activeSubSection}
              handleChangeSection={this.handleChangeSection}
              onScroll={this.handleOnScroll}
              language={this.state.language}
          />
          <SubNavigation
              activeSection={this.state.activeSection}
              activeSubSection={this.state.activeSubSection}
              handleChangeLanguage={this.handleChangeLanguage}
              handleChangeSubSection={this.handleChangeSubSection}
              language={this.state.language}
          />
          <Main
              activeSection={this.state.activeSection}
              activeSubSection={this.state.activeSubSection}
              language={this.state.language}
          />
        </>
    );
  }

  // componentDidMount() {
  //         window.addEventListener('scroll', this.handleScroll);
  //         this.headerQuery = document.querySelector('header');
  // }
  // componentWillUnmount() {
  //         window.removeEventListener('scroll', this.handleScroll);
  // }

}

export default App;
