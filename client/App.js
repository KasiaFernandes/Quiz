import React, { Component } from 'react';
import Game from './Game.js';
import UserForm from './UserForm.js';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ''
        }
        this.handleUserSubmit = this.handleUserSubmit.bind(this);
    }

    renderGame() {
        return (
            <Game name={this.state.name} />
        )
    }

    renderUserForm() {
        return (<UserForm onUserSubmit={name => this.handleUserSubmit(name)} />)
    }

    handleUserSubmit(name) {
        this.setState({ name: name });
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
