import React from 'react';

import Feedback from './feedback';

import InputGuess from './inputGuess';

import NumberGuess from './numberGuess';

import PastGuesses from './pastGuesses';

import './game.css';

export default class Game extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            correctGuess: 10,
            feedback: "Make your Guess !",
            currentGuess: 0,
            previousGuesses: [],            
        };
    }

        hotOrCold(text){

            if(Number.isInteger(Number(text))){
                if(this.state.correctGuess - Number(text) === 3){

                    // const pastGuesses = [];
                    // pastGuesses.push(text);

                    this.setState({
                        
                        currentGuess: this.state.currentGuess++,
                        feedback: "hot",
                        // previousGuesses: this.previousGuesses.concat(text)

                        previousGuesses:[...this.state.previousGuesses, Number(text)]
                    })
                }else{
                    this.setState({
                        currentGuess: this.state.currentGuess++,
                        feedback: "cold",
                        previousGuesses:[...this.state.previousGuesses, Number(text)]
                    })
                }
            }else {
                alert("input an integer");
            }
            
        }
    

   

    render(){

        return (
            <div className="container">
            <div className="menu">
                <p>What?</p>
                <p>+New Game</p>
            </div>
            <h2>Hot and Cold</h2>
            <div className="game">
                <Feedback text={this.state.feedback} />

                <InputGuess onAction={text => this.hotOrCold(text)} />
                <NumberGuess text={this.state.currentGuess} />
                <PastGuesses guesses={this.state.previousGuesses} />
            </div>
        </div>
        )
        

    }
}
