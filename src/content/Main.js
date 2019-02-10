import React from 'react';
import Welcome from './Welcome';
import AboutMe from './AboutMe';
import PageNotFound from '../PageNotFound';

const Main = props => {
    const chooseSection = () =>{
      switch (props.activeSection) {
          case 'welcome':
              return <Welcome content={props.content ? props.content.welcomeContent : null}/>;
          case 'aboutMe':
              return <AboutMe
                        content={props.content ? props.content.aboutMeContent : null}
                        activeSubSection={props.activeSubSection}
              />;
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