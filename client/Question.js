import React from 'react';

const Question = props => {
    return (
        <div>
            <h2>{props.question.question}</h2>
            <ul>
                {props.question.answers.map(answer => <li>{answer.answer}</li>)}
            </ul>
        </div>
    )
}

export default Question;
