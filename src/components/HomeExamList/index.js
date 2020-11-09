import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';
import ExamBlock from './ExamBlock';

function HomeExamList() {
  const exams = [2019, 2018];

  return (
    <div className="home-exams">
      <h1 className="home-exams-title">Edições Resolvidas</h1>
      <p className="home-exams-subtitle">Selecione uma edição do POSCOMP para visualizar as questões resolvidas.</p>
      <div className="home-exams-block-holder">
        {exams.map((exam) => <Link to={`/poscomp/exam/${exam}`}><ExamBlock year={exam} /></Link>)}
      </div>
    </div>
  );
}

export default HomeExamList;
