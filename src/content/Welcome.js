import React from 'react';
import {fbase} from '../fbase';
import myPhotography from '../resources/img/Mateusz_Domanski_small.png';

class Welcome extends React.Component {

    state={
      content: {
        firstParagraph: "",
        secondParagraph: "",
        thirdParagraph: "",
        fourthParagraph: "",
        },
    };

    render(){
        return (
            <main>
                <article className={'app-content__section-welcome'}>
                    <h1 className={'app-content__section-welcome__title'}>
                        <p className={'app-content__section-welcome__title__subtitle'}>{this.state.content.firstParagraph}</p>
                        <p className={'app-content__section-welcome__title__main'}>{this.state.content.secondParagraph}</p>
                        <p className={'app-content__section-welcome__title__subtitle'}>{this.state.content.thirdParagraph}</p>
                        <p className={'app-content__section-welcome__title__subtitle'}> {this.state.content.fourthParagraph}</p>
                    </h1>
                    <div className={'app-content__section-welcome__photo'}>
                        <img src={myPhotography} alt={'My photography'}/>
                    </div>
                </article>
            </main>
        );
    }

    componentDidMount() {
        this.reference = fbase.syncState(
            `${this.props.language}/welcomeContent`,
            {context: this, state: 'content'}
        );
    };

    componentDidUpdate(prevProps) {
        fbase.removeBinding(this.reference);
        if(prevProps.language !== this.props.language) {
            this.reference = fbase.syncState(
                `${this.props.language}/welcomeContent`,
                {context: this, state: 'content'}
            );
        }
    };

    componentWillUnmount() {
        fbase.removeBinding(this.reference);
    };
}

export default Welcome;
