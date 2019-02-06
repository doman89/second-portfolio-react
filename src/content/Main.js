import React from 'react';
import Welcome from './Welcome';
import PageNotFound from '../PageNotFound';

const Main = props => {

    const chooseSection = () =>{
      switch (props.activeSection) {
          case 'welcome':
              return <Welcome language={props.language}/>
          default:
              return <PageNotFound/>
      }
    };

    return (
        <main className={'app-content'}>
            {chooseSection()}
        </main>
    );
};

export default Main;