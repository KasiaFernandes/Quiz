import React, { Component } from 'react';
import style from './Categories.css';
import Game from './Game.js';
import QuestionsData from './QuestionsData.js';

class Categories extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            category: ''
        }
        this.renderGame = this.renderGame.bind(this);
    }

    renderGame() {
        return (
            <Game name={this.state.name} />
        )
    }

    handleCategoryChoice(category) {
        this.setState({ category: QuestionsData.category })
    }



    render() {
        return (
            <div>
                <h2 className={style.Heading}>Hello, {this.props.name}! Choose a category!</h2>
                <div className={style.Container}>
                    <div className={style.Category} onClick={() => this.renderGame()}><h1>JavaScript</h1></div>
                    <div className={style.Category}><h1>CSS</h1></div>
                </div>
            </div>
        )
    }
}



/*
const Categories = props => {

    renderGame() {
        return (
            <Game name={this.state.name} />
        )
    }
    

    return (
        <div>
            <h2 className={style.Heading}>Hello, {props.name}! Choose a category!</h2>
            <div className={style.Container}>
                <div className={style.Category} onClick={() => this.renderGame()}><h1>JavaScript</h1></div>
                <div className={style.Category}><h1>CSS</h1></div>
            </div>
        </div>
    )

}
*/


export default Categories;