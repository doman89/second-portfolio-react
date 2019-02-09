import React from 'react';
import {fbase} from "../fbase";


class HeaderNavigationLiElements extends React.Component{

    state = {
        content: '',
    };

    chooseClassName = () => {
        const {elementDataSet, activeSection} = this.props;
        return elementDataSet === activeSection ? 'app-header__nav__content__list__item__btn--active' : null;
    };

    render() {
        return (
            <li>
                <button
                    className={`app-header__nav__content__list__item__btn ${this.chooseClassName()}`}
                    onClick={this.props.toggleMenuHamburger}
                    data-id={this.props.elementDataSet}
                    data-content={this.state.content}
                >
                    {this.state.content}
                </button>
            </li>
        );
    };

    componentDidMount() {
        this.reference = fbase.syncState(
            `${this.props.language}/navigationContent/${this.props.elementDataSet}`,
            {context: this, state: 'content'}
        );
    };

    componentDidUpdate(prevProps) {
        fbase.removeBinding(this.reference);
        if(prevProps.language !== this.props.language) {
            this.reference = fbase.syncState(
                `${this.props.language}/navigationContent/${this.props.elementDataSet}`,
                {context: this, state: 'content'}
            );
        }
    }

    componentWillUnmount() {
        fbase.removeBinding(this.reference);
    };
}

export default HeaderNavigationLiElements;