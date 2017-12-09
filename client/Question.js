import React from 'react';
import style from './Question.css';


const Question = props => {
    return (
        <div className={style.Question}>
            <h2>{props.question.question}</h2>
            <ul>
                {props.question.answers.map((answer, index) => <li onClick={() => props.onAnswer(answer)} key={index}>{answer.answer}</li>)}
            </ul>
        </div>
    )
}

export default Question;

