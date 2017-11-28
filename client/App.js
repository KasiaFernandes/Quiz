import React, { Component } from 'react';
import Title from './Title.js';
import UserForm from './UserForm.js';
import Question from './Question.js';
import QuestionsData from './QuestionsData.js';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            questionsData: QuestionsData
        }
    }

    // Layout 
    render() {
        return (
            <div>
                <Title title="Welcome to the quiz!!!!" />
                <Question question={this.state.questionsData[0]} />
            </div>
        )
    }

    /*
    // render UserForm first, if user names not blank, render layout
    render() {
        return this.state.name !== '' ? (
            this.renderLayout()
        ) : this.renderUserForm()
    }
    // Layout 
    renderLayout() {
        return (
            <div>
                <Title title="Welcome to the quiz!" />
            </div>
        )
    }

    renderUserForm() {
        return (<UserForm />)
    }
    */
}
export default App;
