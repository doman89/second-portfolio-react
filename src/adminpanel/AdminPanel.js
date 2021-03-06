import React from 'react';
import Header from "../header/Header";
import AdminWelcome from './AdminWelcome';

class AdminPanel extends React.Component {

    state={
        isLogged: false,
        section: 'welcome!',
    };

    handleChangeSection = event => {
        this.setState({
            section: event.target.textContent,
        });
    };

    handleOnSubmit = event => {
        event.preventDefault();
    };

    sectionToEdit = () => {
      switch (this.state.section) {
          case 'welcome!':
              return <AdminWelcome handleOnSubmit={this.handleOnSubmit}/>;
          default:
              return <p>Some things goes wrong!</p>;
      }
    };

    render(){
        return (
            <>
                <Header
                    handleChangeSection={this.handleChangeSection}
                />
                {this.sectionToEdit()}
            </>
        );
    };
}

export default AdminPanel;