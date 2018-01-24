import React, { Component } from 'react';
import UserForm from './UserForm.js';
import Categories from './categories.js';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ''
        }
        this.handleUserSubmit = this.handleUserSubmit.bind(this);
    }

    /*
    renderGame() {
        return (
            <Game name={this.state.name} />
        )
    }
    */

    renderUserForm() {
        return (<UserForm onUserSubmit={name => this.handleUserSubmit(name)} />)
    }

    renderCategories() {
        return (<Categories name={this.state.name} onUserFormReset={() => this.resetUserForm()} />)
    }

    handleUserSubmit(name) {
        this.setState({ name: name });
    }

    resetUserForm() {
        this.setState({ name: '' });
    }

    render() {
        return (
            this.state.name !== '' ? this.renderCategories() : this.renderUserForm()
        )
    }
}

export default App;


/*
renderUserForm() {
        return (<UserForm onUserSubmit={name => this.handleUserSubmit(name)} />)
    }
*/
