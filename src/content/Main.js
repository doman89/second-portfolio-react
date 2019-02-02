import React from 'react';
import Welcome from './Welcome';

const Main = props => {

    const chooseSection = () =>{
      switch (props.activeSection) {
          case 'welcome!':
              return <Welcome />

      }
    };

    return (
        <main className={'app-content'}>
            {chooseSection()}
        </main>
    );
};

export default Main;