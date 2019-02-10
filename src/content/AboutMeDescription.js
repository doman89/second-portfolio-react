import React from 'react';

const AboutMeDescription = props =>{
    return (
        <>
            <p className={'app-content__section-aboutMe__content'}>
                {props.content.past}
            </p>
            <p className={'app-content__section-aboutMe__content'}>
                {props.content.now}
            </p>
            <p className={'app-content__section-aboutMe__content'}>
                {props.content.future}
            </p>
        </>
    )
};

export default AboutMeDescription;