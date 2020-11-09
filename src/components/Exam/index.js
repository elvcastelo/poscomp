import React from 'react';
import PropTypes from 'prop-types';
import examsData from './data/exams.json';
import ExamQuestion from '../ExamQuestion';
import Navbar from '../Navbar';
import './index.css';

function Exam({ match }) {
  const { year } = match.params;
  const data = year in examsData ? examsData[year] : false;

  return (
    <div className="exam-holder">
      <Navbar />
      <h1>
        POSCOMP
        {year}
      </h1>
      {data ? data.map((question) => (
        <ExamQuestion key={question.ID} question={question} />
      )) : <h1>Ainda não existem questões explicadas para essa edição da prova :(</h1>}
    </div>
  );
}

Exam.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      year: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default Exam;
