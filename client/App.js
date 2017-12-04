import React, { Component } from 'react';
import Game from './Game.js';
import UserForm from './UserForm.js';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ''
        }
    }

    renderGame() {
        return (
            <div>
                <Game />
            </div>
        )
    }

    renderUserForm() {
        return (<UserForm onUserSubmit={name => this.handleUserSubmit(name)} />)
    }

    handleUserSubmit(name) {
        this.setState({ name });
    }

    render() {
        return (
            this.state.name !== '' ? this.renderGame() : this.renderUserForm()
        )
    }
}

export default App;


/*
renderUserForm() {
        return (<UserForm onUserSubmit={name => this.handleUserSubmit(name)} />)
    }
*/
