import React from 'react';
import './index.css';

function HomeExamList() {
  return (
    <div className="exams">
      <p className="exams__title">Provas Anteriores</p>
      <div className="exams__list">
        <div className="exams__exam">
          <p className="exams__exam__year">2019</p>
          <hr className="exams__exam__hr" />
        </div>
        <div className="exams__exam">
          <p className="exams__exam__year">2018</p>
          <hr className="exams__exam__hr" />
        </div>
        <div className="exams__exam">
          <p className="exams__exam__year">2017</p>
          <hr className="exams__exam__hr" />
        </div>
      </div>
    </div>
  );
}

export default HomeExamList;
