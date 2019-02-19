import React from 'react';
import PageNotFound from "../PageNotFound";
import AboutMeDescription from "./AboutMeDescription";

const AboutMe = props => {
    const chooseSubSection = () =>{
        switch (props.activeSubSection) {
            case 'coding':
                return <AboutMeDescription content={props.content ? props.content.coding : null}/>;
            case 'electronics':
                return <AboutMeDescription content={props.content ? props.content.electronics : null}/>;
            case 'education':
                return <AboutMeDescription content={props.content ? props.content.education : null}/>;
            case 'experience':
                return <AboutMeDescription content={props.content ? props.content.experience : null}/>;
            default:
                return <PageNotFound/>
        }
    };
    return (
        <article className={'app-content__section-aboutMe'}>
            {chooseSubSection()}
        </article>
    )
};

export default AboutMe;