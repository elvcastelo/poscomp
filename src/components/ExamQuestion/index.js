import React, { useState } from 'react';
import PropTypes from 'prop-types';
import MathJax from '@elvcastelo/mathjax-react';
import './index.css';
import QuestionItem from './QuestionItem';
import QuestionExplanation from './QuestionExplanation';

function ExamQuestion({ question }) {
  const itemsLabel = ['A', 'B', 'C', 'D', 'E'];
  const [showAnswer, setShowAnswer] = useState(false);

  const checkAnswer = (key) => {
    setShowAnswer(true);
    if (key !== question.rightAnswer) {
      return false;
    }
    return true;
  };

  return (
    <>
      <div className="exam-question-holder">
        <p className="exam-question_text">
          <strong>
            QUESTÃO
            {' '}
            {question.ID}
            .
            {' '}
            {question.area}
          </strong>
          .
        </p>
        <MathJax.Node content={question.text} />

        <div className="exam-question-items">
          {question.items.map((item, i) => (
            <QuestionItem item={item} id={i} key={itemsLabel[i]} onClick={checkAnswer} />
          ))}
        </div>

        <QuestionExplanation
          show={showAnswer}
          explanation={question.explanation}
          references={question.references}
        />

      </div>
      <hr className="exam-question-delimiter" />
    </>
  );
}

ExamQuestion.propTypes = {
  question: PropTypes.shape({
    ID: PropTypes.string.isRequired,
    area: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(PropTypes.string).isRequired,
    rightAnswer: PropTypes.number.isRequired,
    explanation: PropTypes.string.isRequired,
    references: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
  }).isRequired,
};

export default ExamQuestion;
