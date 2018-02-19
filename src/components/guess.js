import React from 'react';

import './guess.css';

export default function Guess(props) {
    return (
        <div className="guess">
            {props.guess}
        </div>
    );
};

Guess.defaultProps = {
    text: ''
};
