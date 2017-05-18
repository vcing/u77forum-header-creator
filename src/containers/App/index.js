import React, {Component} from 'react';
// import {observable} from 'mobx';
import {observer, Provider} from 'mobx-react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import DevTools from 'mobx-react-devtools';
import stores from '../../stores';
import Template from '../Template';
import Editor from '../Editor';
import styles from './App.css';

@observer
export default class App extends Component {
  render() {
    return (
      <Provider {...stores}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <Editor />
            </div>
            <div className="col-lg-6 col-md-12">
              <Template/>
            </div>
          </div>
        </div>
      </Provider>
    )
  }
};
