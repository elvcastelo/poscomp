import React from 'react';
import './QuestionExplanation.css';
import MathContext from '../MathContext';

function QuestionExplanation(props) {

    const showExplanation = (show) => {
        if(show) {
            return (
                <div className="exam-question-explanation">
                    <p className="exam-question-explanation-e">Explicação: </p>
                    <MathContext content={props.explanation} />
                </div>
            )
        }
    }

    return (
        <div>
            {showExplanation(props.show)}
        </div>
    );
}

export default QuestionExplanation;