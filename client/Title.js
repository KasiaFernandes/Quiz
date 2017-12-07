import React from 'react';
import style from './Title.css';


const Title = props => {
    return (
        <div className={style.Title}>
            <h1>{props.title} {props.name}</h1>
            <h3>{props.status} {props.score}</h3>
        </div>
    )
}

export default Title;
