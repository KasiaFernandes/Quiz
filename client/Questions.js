import React from 'react';
import Question from './Question.js';


const Questions = props => {
    return (
        <div>
            <Question question={props.question} />

        </div>
    )
}

/*
class Questions extends Component {
    constructor(props) {
        super(props);
        this.state = {
            question: '',
            answers: []
        }
    }

    //Should this be in App.js??

    getRandomQuestion() {
        return QuestionsData[(Math.floor(Math.random() * (QuestionsData.length + 1)))]
    }

    render() {
        return (
            <div>
                <button onClick={this.getRandomQuestion.bind(this)}>Get Question</button>
            </div>
        )
    }


}
*/

export default Questions
