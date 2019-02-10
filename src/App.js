import React, { Component } from 'react';
import Header from './header/Header';
import SubNavigation from './subnavigation/SubNavigation';
import Main from "./content/Main";
import {fbase} from "./fbase";

class App extends Component {

  state = {
      dataFromFirebase: [],
      headerBottomOffset: 0,
      activeSection: 'welcome',
      activeSubSection: 'en',
      language: 'en',
  };

  handleChangeSection = event => {
      let tempSubSection;
      switch(event.target.dataset.id){
          case 'aboutMe':
              tempSubSection = 'coding';
              break;
          case 'welcome':
              tempSubSection = this.state.language;
              break;
          default:
              tempSubSection = null;
      }
      this.setState({
          activeSection: event.target.dataset.id,
          activeSubSection: tempSubSection,
      });
  };

  handleChangeSubSection = event => {
      const {id} = event.target.dataset;
      if(id === 'en' || id ==='pl') {
          this.setState({
              language: id,
              activeSubSection: id,
          });
      }else{
          this.setState({
              activeSubSection: id,
          });
      }
  };

  render() {
    return (
        <>
          <Header
              activeSection={this.state.activeSection}
              handleChangeSection={this.handleChangeSection}
              content={this.state.dataFromFirebase.navigationContent}
          />
          <SubNavigation
              activeSection={this.state.activeSection}
              activeSubSection={this.state.activeSubSection}
              handleChangeSubSection={this.handleChangeSubSection}
              content={this.state.dataFromFirebase}
          />
          <Main
              activeSection={this.state.activeSection}
              activeSubSection={this.state.activeSubSection}
              content={this.state.dataFromFirebase}
          />
        </>
    );
  };

  componentDidMount() {
    this.reference = fbase.syncState(this.state.language,{context: this, state: 'dataFromFirebase'});
  };

  componentDidUpdate(prevProps, prevState){
    fbase.removeBinding(this.reference);
    if(prevState.language !== this.state.language) {
        this.reference = fbase.syncState(this.state.language,{context: this, state: 'dataFromFirebase'});
    }
  };

  componentWillUnmount() {
    fbase.removeBinding(this.reference);
  };
}

export default App;
