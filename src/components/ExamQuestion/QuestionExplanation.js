import React from 'react';
import PropTypes from 'prop-types';
import MathJax from '@elvcastelo/mathjax-react';
import './QuestionExplanation.css';

function QuestionExplanation({ explanation, show, references }) {
  const referencesComponent = (r) => {
    if (typeof r !== 'undefined') {
      return (
        <>
          <p className="exam-question-explanation-e">Referências: </p>
          {r.map((ref, i) => (
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
        </>
      );
    }
    return <></>;
  };

  const showExplanation = (s) => {
    if (s) {
      return (
        <div className="exam-question-explanation">
          <p className="exam-question-explanation-e">Explicação: </p>
          <MathJax.Node content={explanation} />

          {referencesComponent(references)}
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
  references: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
};

QuestionExplanation.defaultProps = {
  references: undefined,
};

export default QuestionExplanation;
