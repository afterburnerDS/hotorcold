import React from 'react';

import './feedback.css';

export default function Feedback({text}) {
    return (
        <div className="feedback">
            {text}
        </div>
    );
};
