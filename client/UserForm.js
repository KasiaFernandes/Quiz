import React from 'react';

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
            <form className={styles.UserForm} onSubmit={e => this.handleSubmit(e)}>
                <input className={styles.UserInput} value={this.state.name} onChange={e => this.handleChange(e)} placeholder="Name of the first participant" />
                <input className={styles.UserInput} value={this.state.name} onChange={e => this.handleChange(e)} placeholder="Name of the second participant" />
            </form>
        )
    }
}



export default UserForm;