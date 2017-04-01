import React, {Component} from 'react';
import {observer, Provider} from 'mobx-react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import uiStore from './UiStore';
//styles
import styles from './App.css';

@observer
export default class App extends Component {

  render() {
    return (
      <Provider>
        <Router history={uiStore.history}>
          <div className={styles.App}>
          </div>
        </Router>
      </Provider>
    )
  }
};
