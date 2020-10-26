import React from 'react';
import examsData from './data/exams.json';
import ExamQuestion from '../ExamQuestion';
import Navbar from '../Navbar';
import './index.css';

function Exam(props) {

    const year = props.match.params.year
    const data = year in examsData ? examsData[year] : false
    return (
        <div className="exam-holder">
            <Navbar />
            <h1>POSCOMP {year}</h1>
            {data ? data.map((question) => (
                <ExamQuestion key={question.ID} question={question} />
            )) : <h1>Ainda não existem questões explicadas para essa edição da prova :(</h1>}
        </div>
    );
}

export default Exam;