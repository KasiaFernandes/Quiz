import React, { Component } from 'react';
import Title from './Title.js';
import Question from './Question.js';
import QuestionsData from './QuestionsData.js';
import style from './Game.css';


class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            questionsData: QuestionsData.filter(question => question.category === props.category),
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
        // const selectedQIndex = Math.floor(Math.random() * this.state.questionsData.length);
        // const selectedQuestion = this.state.questionsData[selectedQIndex];
        // const questionsData = this.state.questionsData.filter((question, index) => index !== selectedQIndex)
        this.setState(state => {
            const selectedQIndex = Math.floor(Math.random() * state.questionsData.length);
            const selectedQuestion = state.questionsData[selectedQIndex];
            return {
                selectedQuestion: selectedQuestion
            }
            // questionsData: this.state.questionsData.filter((question, index) => index !== selectedQIndex),
            // selectedQuestion: this.state.questionsData[selectedQIndex]
        })
    }

    removeQuestion() {
        // const questionsData = this.state.questionsData.filter(question => question !== this.state.selectedQuestion);
        this.setState(state => {
            const questionsData = state.questionsData.filter(question => question !== state.selectedQuestion);
            return {
                questionsData: questionsData
            }
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


    startAgain() {
        this.props.onGameReset()
    }

    // Layout 
    render() {
        return (
            <div className={style.Game}>
                <Title title="Welcome to the quiz," name={this.props.name} status="Your current score is:" score={this.state.score} />
                {this.state.questionsData.length ?
                    <div>
                        <Question question={this.state.selectedQuestion} onAnswer={this.onAnswer} />
                    </div> : <div><h2 className={style.End}>No more questions!</h2>
                        <button onClick={() => this.startAgain()}>START AGAIN</button>
                    </div>
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