import React from 'react';
import './ExamBlock.css';
import examsData from '../Exam/data/exams.json';

function ExamBlock(props) {

    const allDone = <span role="img" aria-label="completo">✔️</span>
    const incomplete = <span role="img" aria-label="incompleto">❌</span>
    const N = examsData[props.year].length
    
    return (
        <div className="home-exams-block">
            <p className="home-exams-block-e">Edição</p>
            <h1>{props.year}</h1>
            <p>Questões resolvidas: {N} de 70 {props.questions === 70 ? allDone : incomplete}</p>
        </div>
    );
}

export default ExamBlock;