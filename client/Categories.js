import React, { Component } from 'react';
import style from './Categories.css';
import Game from './Game.js';

class Categories extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            category: ''
        }
        this.handleCategoryChoice = this.handleCategoryChoice.bind(this);
    }

    renderGame() {
        return (
            <Game name={this.props.name} category={this.state.category} onGameReset={() => this.resetCategories()} />
        )
    }

    handleCategoryChoice(category) {
        this.setState({ category: category })
    }

    render() {
        return (
            this.state.category === '' ? this.renderCategories() : this.renderGame()
        )
    }

    resetCategories() {
        this.props.onUserFormReset()
        /*
            this.setState({ category: '' })
        */
    }

    renderCategories() {
        return (
            <div>
                <h2 className={style.Heading}>Hello, {this.props.name}! Choose a category!</h2>
                <div className={style.Container}>
                    <div className={style.Category} onClick={() => this.handleCategoryChoice("javascript")}><h1>JavaScript</h1></div>
                    <div className={style.Category} onClick={() => this.handleCategoryChoice("css")}><h1>CSS</h1></div>
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

const Categories = props => {

    function renderGame(category) {
        return (
            <Game name={props.name} category={category} />
        )
    }

    return (
        <div>
            <h2 className={style.Heading}>Hello, {props.name}! Choose a category!</h2>
            <div className={style.Container}>
                <div className={style.Category} onClick={() => renderGame("javascript")}><h1>JavaScript</h1></div>
                <div className={style.Category}><h1>CSS</h1></div>
            </div>
        </div>
    )

}
*/


export default Categories;