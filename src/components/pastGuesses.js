import React from 'react';

import Guess from './guess';

export default function pastGuesses(props) {

    const guesses = props.guesses.map((guess, index) =>
    <li key={index}>
        <Guess guess = {guess}/>
    </li>
    );
    return (
        <div>
        <ul className="pastGuesses">
            {guesses}
            
        </ul>
    </div>
    );
};