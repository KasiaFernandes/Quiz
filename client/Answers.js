import React from 'react';

const Answers = props => {
    return (
        <ul>
            {props.question.answers.map((answer, index) => <li key={index}>{answer.answer}</li>)}
        </ul>
    )
}

export default Answers;