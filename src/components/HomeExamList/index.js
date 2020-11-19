import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

function HomeExamList() {
  return (
    <div className="exams" id="exams">
      <p className="exams__title">Provas Anteriores</p>
      <div className="exams__list">
        <Link to="/poscomp/exam/2019" className="exams__exam">
          <div>
            <p className="exams__exam__year">2019</p>
            <hr className="exams__exam__hr" />
          </div>
        </Link>
        <Link to="/poscomp/exam/2018" className="exams__exam">
          <div>
            <p className="exams__exam__year">2018</p>
            <hr className="exams__exam__hr" />
          </div>
        </Link>
        <Link to="/poscomp/exam/2017" className="exams__exam">
          <div>
            <p className="exams__exam__year">2017</p>
            <hr className="exams__exam__hr" />
          </div>
        </Link>

        <div className="exam__borders">
          <Link to="/poscomp/exam/2019" className="exams__exam above" />
          <Link to="/poscomp/exam/2018" className="exams__exam above" />
          <Link to="/poscomp/exam/2017" className="exams__exam above" />
        </div>
      </div>
    </div>
  );
}

export default HomeExamList;
