import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './QuestionItem.css';
import MathContext from '../MathContext';

function QuestionItem({ onClick, id, item }) {
  const [itemColor, setItemColor] = useState('black');

  const handleClick = () => {
    const correct = onClick(id);
    if (correct) {
      setItemColor('green');
    } else {
      setItemColor('red');
    }
  };

  const itemsLabel = ['A', 'B', 'C', 'D', 'E'];

  return (
    <div
      className="exam-question_item"
      style={{ color: itemColor }}
      onClick={() => handleClick()}
      role="button"
      tabIndex={0}
      onKeyDown={() => handleClick()}
    >
      <MathContext content={`${itemsLabel[id]}) ${item}`} />
    </div>
  );
}

QuestionItem.propTypes = {
  id: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
  item: PropTypes.string.isRequired,
};

export default QuestionItem;
