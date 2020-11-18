import React from 'react';
import PropTypes from 'prop-types';
import './ExamBlock.css';
import examsData from '../Exam/data/exams.json';

function ExamBlock({ year }) {
  const allDone = <span role="img" aria-label="completo">✔️</span>;
  const incomplete = <span role="img" aria-label="incompleto">❌</span>;
  const N = examsData[year].length;

  return (
    <div className="home-exams-block">
      <p className="home-exams-block-e">Edição</p>
      <h1>{year}</h1>
      <p>
        Questões resolvidas:
        {' '}
        {N}
        {' '}
        de 70
        {' '}
        {N === 70 ? allDone : incomplete}
      </p>
    </div>
  );
}

ExamBlock.propTypes = {
  year: PropTypes.number.isRequired,
};

export default ExamBlock;
