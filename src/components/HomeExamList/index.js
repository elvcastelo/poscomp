import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';
import ExamBlock from './ExamBlock.js';

function HomeExamList() {

    const exams = [
        {
            "year": 2019,
            "questions": 2,
        },
        {
            "year": 2018,
            "questions": 0,
        }
    ]

    return (
        <div className="home-exams">
            <h1 className="home-exams-title">Edições Resolvidas</h1>
            <p className="home-exams-subtitle">Selecione uma edição do POSCOMP para visualizar as questões resolvidas.</p>
            <div className="home-exams-block-holder">
                {exams.map((exam, i) => {
                    return <Link to={`/exam/${exam.year}`}><ExamBlock year={exam.year} questions={exam.questions} /></Link>
                })}
            </div>
        </div>
    );
}

export default HomeExamList;