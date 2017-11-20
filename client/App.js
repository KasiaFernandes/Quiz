import React from 'react';
import Title from './Title.js';

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
}

// render UserForm first, if user names not blank, render layout

export default App;

