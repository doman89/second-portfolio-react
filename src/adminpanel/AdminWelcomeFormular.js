import React from 'react';
import {fbase} from '../fbase';

class AdminWelcomeFormular extends React.Component{
    state = {
        content: {
            firstParagraph: '',
            secondParagraph: '',
            thirdParagraph: '',
            fourthParagraph: '',
        },
        firstLine: '',
        secondLine: '',
        thirdLine: '',
        fourthLine: '',
        confirmed: false,
    };

    handleGetData = () => {
        this.setState({
            firstLine: this.state.content.firstParagraph,
            secondLine: this.state.content.secondParagraph,
            thirdLine: this.state.content.thirdParagraph,
            fourthLine: this.state.content.fourthParagraph
        });
    };

    handleSendData = () => {
        if(this.state.confirmed) {
            this.setState(prevState => ({
                content: {
                    firstParagraph: prevState.firstLine,
                    secondParagraph: prevState.secondLine,
                    thirdParagraph: prevState.thirdLine,
                    fourthParagraph: prevState.fourthLine
                },
            }))
        }else{
            alert("First you have to allowed for sending data!");
        }
    };

    handleConfirm = () => {
      this.setState( prevState => (
          {confirmed: !prevState.confirmed}
      ))
    };

    handleOnChange = event => {
        const id = event.target.id;
        const value = event.target.value;
        this.setState({
            [id]: value,
        })
    };

    componentDidMount() {
        this.reference = fbase.syncState(
            `${this.props.language}/welcomeContent`,
            {context: this, state: 'content'}
        );
    };

    componentWillUnmount() {
        fbase.removeBinding(this.reference);
    }

    render(){
        const {firstLine, secondLine, thirdLine, fourthLine} = this.state;
      return (
        <form onSubmit={this.props.handleOnSubmit}>
            <p>{`Edition field for ${this.props.language} version`}</p>
            <br />
            <label htmlFor={'firstLine'}>First line of text</label>
            <textarea
                id={'firstLine'}
                value={firstLine}
                onChange={this.handleOnChange}
            />
            <label htmlFor={'secondLine'}>Second line of text</label>
            <textarea
                id={'secondLine'}
                value={secondLine}
                onChange={this.handleOnChange}
            />
            <label htmlFor={'thirdLine'}>Third line of text</label>
            <textarea
                id={'thirdLine'}
                value={thirdLine}
                onChange={this.handleOnChange}
            />
            <label htmlFor={'fourthLine'}>Fourth line of text</label>
            <textarea
                id={'fourthLine'}
                value={fourthLine}
                onChange={this.handleOnChange}
            />
            <div>
                <label htmlFor={'allowOnSend'}>Confirm data to send!</label>
                <input id={'allowOnSend'} type="checkbox" onChange={this.handleConfirm} value={this.state.confirmed}/>
            </div>
            <button onClick={this.handleGetData}>Get Data</button>
            <button onClick={this.handleSendData}>Send Data</button>
        </form>
      );
    };
}

export default AdminWelcomeFormular;