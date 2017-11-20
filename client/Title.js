import React from 'react';

// TODO: replace with 
// import style from "./Title.css" 
const style = {
    Title: "Title"
}

const Title = props => {
    return (
        <div className={style.Title}>
            <h1>{props.title}</h1>
        </div>
    )
}

export default Title;
