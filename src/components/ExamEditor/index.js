import React, { useState } from 'react';
import MathJax from '@elvcastelo/mathjax-react';
import Navbar from '../Navbar';
import './index.css';

function ExamEditor() {
  const [textPreview, setTextPreview] = useState('$$ \\int x^2 dx = \\frac{x^3}{3} $$');
  const JSONTextPreview = textPreview.replace(/\n/g, ' ').replace(/\\/g, '\\\\').replace(/"/g, '\\"');

  return (
    <>
      <Navbar />
      <div className="exam-editor-holder">
        <h1 className="exam-editor-title">Editor de Questões</h1>
        <p className="exam-editor-subtitle">Ferramenta para facilitar a adição e edição de questões.</p>
        <textarea className="exam-editor-textarea" onChange={(e) => setTextPreview(e.target.value)} defaultValue={textPreview} />
        <div className="exam-editor-preview">
          <p className="bold">Pré-visualização:</p>
          <MathJax.Node content={textPreview} />
          <p className="bold">Formatação para JSON:</p>
          <p>{JSONTextPreview}</p>
        </div>
      </div>
    </>
  );
}

export default ExamEditor;
