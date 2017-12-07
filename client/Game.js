import React, { Component } from 'react';
import Title from './Title.js';
import Question from './Question.js';
import QuestionsData from './QuestionsData.js';


class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            questionsData: QuestionsData,
            selectedQuestion: undefined,
            score: 0
        }
        this.getRandomQuestion = this.getRandomQuestion.bind(this)
        this.onAnswer = this.onAnswer.bind(this)
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

    onAnswer(answer) {
        const score = this.state.score
        if (answer.correct == true) {
            this.setState({
                score: score + 1
            })
        } else {
            this.setState({
                score: score
            })
        }
    }

    // Layout 
    render() {
        return (
            <div>
                <Title title="Welcome to the quiz," name={this.state.name} status="Your current score is:" score={this.state.score} />
                {this.state.questionsData.length ?
                    <div>
                        <Question question={this.state.selectedQuestion} onAnswer={this.onAnswer} />
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
export default Game;