import React from 'react';
import './ExamBlock.css'

function ExamBlock(props) {

    const questionsTotal = props.year < 2005 ? 50 : 70
    const allDone = <span role="img" aria-label="completo">✔️</span>
    const incomplete = <span role="img" aria-label="incompleto">❌</span>

    return (
        <div className="home-exams-block">
            <h1>{props.year}</h1>
    <p>Questões resolvidas: {props.questions} de {questionsTotal} {props.questions === questionsTotal ? allDone : incomplete}</p>
        </div>
    );
}

export default ExamBlock;