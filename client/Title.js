import React from 'react';
import style from './Title.css';


const Title = props => {
    return (
        <div className={style.Title}>
            <h1>{props.title} {props.name}</h1>
        </div>
    )
}

export default Title;
