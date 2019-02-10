import React from 'react';
import myPhotography from '../resources/img/Mateusz_Domanski_small.png';

const Welcome = props => {

    return (
        <article className={'app-content__section-welcome'}>
            <h1 className={'app-content__section-welcome__title'}>
                <p
                    className={'app-content__section-welcome__title__subtitle'}
                >{props.content ? props.content.firstParagraph : `data is loading...`}
                </p>
                <p
                    className={'app-content__section-welcome__title__main'}
                >{props.content ? props.content.secondParagraph : `data is loading...`}
                </p>
                <p
                    className={'app-content__section-welcome__title__subtitle'}
                >{props.content ? props.content.thirdParagraph : `data is loading...`}
                </p>
                <p
                    className={'app-content__section-welcome__title__subtitle'}
                >{props.content ? props.content.fourthParagraph : `data is loading...`}
                </p>
            </h1>
            <div className={'app-content__section-welcome__photo'}>
                <img src={myPhotography} alt={'My photography'}/>
            </div>
        </article>
    );
};

export default Welcome;
