import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MathJax from '@elvcastelo/mathjax-react';
import './index.css';
import Home from './components/Home';
import Exam from './components/Exam';
import ExamEditor from './components/ExamEditor';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <MathJax.Context options={{
    inlineMath: [['$', '$']],
  }}
  >
    <React.StrictMode>
      <Router>
        <Switch>
          <Route path="/poscomp/exam/:year" component={Exam} />
          <Route path="/poscomp/editor" component={ExamEditor} />
          <Route path="/poscomp">
            <Home />
          </Route>
        </Switch>
      </Router>
    </React.StrictMode>
  </MathJax.Context>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
