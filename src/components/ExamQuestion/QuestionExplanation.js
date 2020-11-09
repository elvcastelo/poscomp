import React from 'react';
import PropTypes from 'prop-types';
import './QuestionExplanation.css';
import MathContext from '../MathContext';

function QuestionExplanation({ explanation, show, references }) {
  const showExplanation = (s) => {
    if (s) {
      return (
        <div className="exam-question-explanation">
          <p className="exam-question-explanation-e">Explicação: </p>
          <MathContext content={explanation} />

          <p className="exam-question-explanation-e">Referências: </p>
          {references.map((ref, i) => (
            <p>
              [
              {i + 1}
              ]
              {' '}
              <a href={ref.href} target="_blank" rel="noreferrer">
                {ref.text}
                .
              </a>
            </p>
          ))}
        </div>
      );
    }
    return <></>;
  };

  return (
    <div>
      {showExplanation(show)}
    </div>
  );
}

QuestionExplanation.propTypes = {
  show: PropTypes.bool.isRequired,
  explanation: PropTypes.string.isRequired,
  references: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default QuestionExplanation;
