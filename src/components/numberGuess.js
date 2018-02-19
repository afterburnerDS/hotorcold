import React from 'react';

export default function numberGuess({text}) {
    return (
    <div className="form-group">
        <p>Guess#<span>{text}</span></p>
    </div>
    );
};