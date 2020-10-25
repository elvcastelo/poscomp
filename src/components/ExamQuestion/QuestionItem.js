import React, { useState } from 'react';
import './QuestionItem.css';
import MathContext from '../MathContext';

function QuestionItem(props) {

    const [itemColor, setItemColor] = useState("black")

    const handleClick = () => {
        let correct = props.onClick(props.id)
        if (correct) {
            setItemColor("green")
        } else {
            setItemColor("red")
        }
    }

    const itemsLabel = ['A', 'B', 'C', 'D', 'E']

    return (
        <div className={`exam-question_item`} style={{ color: itemColor }} onClick={() => handleClick()}>
            <MathContext content={`${itemsLabel[props.id]}) ${props.item}`} />
        </div>
    );
}

export default QuestionItem