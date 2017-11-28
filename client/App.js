import React, { Component } from 'react';
import Title from './Title.js';
import UserForm from './UserForm.js';
import Questions from './Questions.js';
import QuestionsData from './QuestionsData.js';

class App extends React.Component {
    constructor(props) {
        super(props);
    }
    // Layout 
    render() {
        return (
            <div>
                <Title title="Welcome to the quiz!!!!" />
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
