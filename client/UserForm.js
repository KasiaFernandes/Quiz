import React, { Component } from 'react';
import styles from './UserForm.css';

class UserForm extends Component {
    constructor(props) {
        super(props);
        this.state = { name: '' };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.onUserSubmit(this.state.name);
    }

    handleChange(e) {
        this.setState({ name: e.target.value });
    }

    render() {
        return (
            <div>
                <form className={styles.UserForm} onSubmit={e => this.handleSubmit(e)}>
                    <input className={styles.UserInput} value={this.state.name} onChange={e => this.handleChange(e)} placeholder="Name of the participant" />
                </form>
            </div>
        )
    }
}



export default UserForm;

//onSubmit={e => this.handleSubmit(e)}
/*
handleSubmit(e) {
    e.preventDefault();
    this.props.onUserSubmit(this.state.name);
}
*/