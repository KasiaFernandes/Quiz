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
            selectedQuestion: QuestionsData[0]
        }
        this.getRandomQuestion = this.getRandomQuestion.bind(this)
    }


    getRandomQuestion() {
        const selectedQIndex = Math.floor(Math.random() * this.state.questionsData.length)
        const selectedQuestion = this.state.questionsData[selectedQIndex]
        const questionsData = this.state.questionsData.filter((question, index) => index !== selectedQIndex)
        if (selectedQuestion === undefined) {
            this.setState({
                selectedQuestion: 'Quiz completed!'
            })
        } else {
            this.setState({
                questionsData: this.state.questionsData.filter((question, index) => index !== selectedQIndex),
                selectedQuestion: this.state.questionsData[selectedQIndex]
            })
        }
    }

    // Layout 
    render() {
        return (
            <div>
                <Title title="Welcome to the quiz!!!!" />
                <Question question={this.state.selectedQuestion} />
                <button onClick={this.getRandomQuestion}>GET QUESTION!</button>
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
