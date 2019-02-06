import React from 'react';
import SubNavigationButton from "./SubNavigationButton";

const SubNavigationWelcome = props => {
    return (
        <>
            <SubNavigationButton
                textContent={'English'}
                function={props.handleChangeLanguage}
                elementDataSet={'en'}
            />
            <SubNavigationButton
                textContent={'Polski'}
                function={props.handleChangeLanguage}
                elementDataSet={'pl'}
            />
        </>
    );
};

export default SubNavigationWelcome;