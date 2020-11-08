import React, { useState } from 'react';
import MathContext from '../MathContext';
import Navbar from '../Navbar';
import './index.css';

function ExamEditor() {

    const [textPreview, setTextPreview] = useState("$$ \\int x^2 dx = \\frac{x^3}{3} $$")

    console.log(textPreview.replace(/\n/g, " ").replace(/\\/g, "\\\\").replace(/"/g, "\\\""))

    return (
        <>
            <Navbar />
            <div className="exam-editor-holder">
                <h1 className="exam-editor-title">Editor de Questões</h1>
                <p className="exam-editor-subtitle">Ferramenta para facilitar a adição e edição de questões.</p>
                <textarea className="exam-editor-textarea" onChange={e => setTextPreview(e.target.value)} defaultValue={textPreview}></textarea>
                <div className="exam-editor-preview">
                    <p>Pré-visualização:</p>
                    <MathContext content={String.raw`${textPreview}`} />
                </div>
            </div>
        </>
    )
}

export default ExamEditor;