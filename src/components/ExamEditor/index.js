import React, { useState } from 'react';
import MathContext from '../MathContext';
import Navbar from '../Navbar';
import examData from '../Exam/data/exams.json';
import './index.css';

function ExamEditor() {

    const [textPreview, setTextPreview] = useState("$$ \\int x^2 dx = \\frac{x^3}{3} $$")
    try {
        console.log(JSON.parse(`{"a": "${textPreview.replace("\\", "\\\\")}"}`))
    } catch { }

    return (
        <>
            <Navbar />
            <div className="exam-editor-holder">
                <h1 className="exam-editor-title">Editor de Questões</h1>
                <p className="exam-editor-subtitle">Ferramenta para facilitar a adição e edição de questões.</p>
                <textarea className="exam-editor-textarea" onChange={(e) => setTextPreview(e.target.value)}>{textPreview}</textarea>
                <div className="exam-editor-preview">
                    <p>Pré-visualização:</p>
                    <MathContext content={String.raw`${textPreview}`} />
                </div>
            </div>
        </>
    )
}

export default ExamEditor;