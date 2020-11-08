import React, { useState } from 'react';
import './index.css';
import QuestionItem from './QuestionItem';
import MathContext from '../MathContext';
import QuestionExplanation from './QuestionExplanation';

function ExamQuestion(props) {

    const [showAnswer, setShowAnswer] = useState(false)

    const checkAnswer = (key) => {
        setShowAnswer(true)
        if (key !== props.question.rightAnswer) {
            return false
        }
        return true
    }

    return (
        <>
            <div className="exam-question-holder">
                <p className="exam-question_text"><strong>QUESTÃO {props.question.ID}. {props.question.area}</strong>.</p>
                <MathContext content={props.question.text} />

                <div className="exam-question-items">
                    {props.question.items.map((item, i) => (
                        <QuestionItem item={item} key={i} id={i} onClick={checkAnswer} />
                    ))}
                </div>
                
                <QuestionExplanation show={showAnswer} explanation={props.question.explanation} />

            </div>
            <hr className="exam-question-delimiter" />
        </>
    );
}

export default ExamQuestion;