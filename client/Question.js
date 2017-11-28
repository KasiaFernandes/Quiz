import React from 'react';

const Question = props => {
    return (
        <div>
            <h3>{props.question.question}</h3>
            <ul>
                {props.question.answers.map(answer => <li>{answer.answer}</li>)}
            </ul>
        </div>
    )
}

export default Question;
