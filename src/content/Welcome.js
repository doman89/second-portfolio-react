import React from 'react';
import myPhotography from '../resources/img/Mateusz_Domanski_small.png';

const Welcome = () => {
    return (
        <main >
            <article className={'app-content__section-welcome'}>
                <h1 className={'app-content__section-welcome__title'}>
                    <p className={'app-content__section-welcome__title__main'}>Hi! I am</p>
                    <p className={'app-content__section-welcome__title__main'}>Mateusz Domanski</p>
                    <p className={'app-content__section-welcome__title__subtitle'}>Are you looking for junior developer?</p>
                    <p className={'app-content__section-welcome__title__subtitle'}> I would like to invite you, to see my portfolio.</p>
                </h1>
                <div className={'app-content__section-welcome__photo'}>
                    <img src={myPhotography} alt={'My photography'}/>
                </div>
            </article>
        </main>
    );
};

export default Welcome;
