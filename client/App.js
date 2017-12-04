import React, { Component } from 'react';
import Title from './Title.js';
import UserForm from './UserForm.js';
import Question from './Question.js';
import QuestionsData from './QuestionsData.js';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            questionsData: QuestionsData,
            selectedQuestion: undefined
        }
        this.getRandomQuestion = this.getRandomQuestion.bind(this)
    }

    componentWillMount() {
        this.getRandomQuestion()
    }

    getRandomQuestion() {
        const selectedQIndex = Math.floor(Math.random() * this.state.questionsData.length)
        const selectedQuestion = this.state.questionsData[selectedQIndex]
        const questionsData = this.state.questionsData.filter((question, index) => index !== selectedQIndex)
        this.setState({
            questionsData: questionsData,
            selectedQuestion: selectedQuestion
            // questionsData: this.state.questionsData.filter((question, index) => index !== selectedQIndex),
            // selectedQuestion: this.state.questionsData[selectedQIndex]
        })

    }

    // Layout 
    render() {
        return (
            <div>
                <Title title="Welcome to the quiz!!!!" />
                {this.state.questionsData.length ?
                    <div>
                        <Question question={this.state.selectedQuestion} />
                        <button onClick={this.getRandomQuestion}>GET QUESTION!</button>
                    </div> : "No more questions!"
                }
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
