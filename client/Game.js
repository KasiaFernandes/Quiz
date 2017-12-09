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
        this.getRandomQuestion = this.getRandomQuestion.bind(this);
        this.removeQuestion = this.removeQuestion.bind(this);
        this.onAnswer = this.onAnswer.bind(this);
    }

    componentWillMount() {
        this.getRandomQuestion()
    }


    getRandomQuestion() {
        const selectedQIndex = Math.floor(Math.random() * this.state.questionsData.length);
        const selectedQuestion = this.state.questionsData[selectedQIndex];
        // const questionsData = this.state.questionsData.filter((question, index) => index !== selectedQIndex)
        this.setState({
            selectedQuestion: selectedQuestion
            // questionsData: this.state.questionsData.filter((question, index) => index !== selectedQIndex),
            // selectedQuestion: this.state.questionsData[selectedQIndex]
        })
    }

    removeQuestion() {
        const questionsData = this.state.questionsData.filter(question => question !== this.state.selectedQuestion);
        this.setState({
            questionsData: questionsData,
        })
    }


    onAnswer(answer) {
        const score = this.state.score
        const pointsToAdd = answer.correct
        this.setState({
            score: score + pointsToAdd
        }, () => {
            this.removeQuestion();
            this.getRandomQuestion();
        })
    }


    // Layout 
    render() {
        return (
            <div>
                <Title title="Welcome to the quiz," name={this.props.name} status="Your current score is:" score={this.state.score} />
                {this.state.questionsData.length ?
                    <div>
                        <Question question={this.state.selectedQuestion} onAnswer={this.onAnswer} />

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


    <button onClick={this.getRandomQuestion}>GET QUESTION!</button>
    */
}
export default Game;