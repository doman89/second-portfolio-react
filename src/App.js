import React, { Component } from 'react';
import Header from './header/Header';
import SubNavigation from './subnavigation/SubNavigation';
import Main from "./content/Main";

class App extends Component {

  state = {
      headerBottomOffset: 0,
      activeSection: 'welcome',
      activeSubSection: '',
      language: 'en',
  };


  handleChangeLanguage = event => {
      this.setState({
          language: event.target.dataset.id,
      })
  };

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

  render() {
    return (
        <>
          <Header
              activeSection={this.state.activeSection}
              handleChangeSection={this.handleChangeSection}
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
  };
}

export default App;
