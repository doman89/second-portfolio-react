import React from 'react';
import SubNavigationButton from "./SubNavigationButton";

const SubNavigationWelcome = props => {
    return (
        <>
            <SubNavigationButton
                textContent={'English'}
                function={props.handleChangeLanguage}
                activeSubSection={props.language}
                elementDataSet={'en'}
            />
            <SubNavigationButton
                textContent={'Polski'}
                function={props.handleChangeLanguage}
                activeSubSection={props.language}
                language={props.language}
                elementDataSet={'pl'}
            />
        </>
    );
};

export default SubNavigationWelcome;