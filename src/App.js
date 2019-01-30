import React, { Component } from 'react';
import Header from './header/Header';

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
  }

  render() {
    return (
        <>
      <Header
          handleChangeSection={this.handleChangeSection}
          onScroll={this.handleOnScroll}
      />
          <nav>Here is the end of this site</nav>
          <section>{this.state.activeSection}</section>
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
