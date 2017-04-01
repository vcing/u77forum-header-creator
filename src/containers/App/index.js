import React, {Component} from 'react';
import {observer, Provider} from 'mobx-react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import stores from '../../stores';
import Home from '../Home';
//styles
import styles from './App.css';

@observer
export default class App extends Component {
  render() {
    return (
      <Provider {...stores}>
        <Router history={stores.uiStore.history}>
          <div className={styles.App}>
            <Route path='/' exact component={Home}></Route>
          </div>
        </Router>
      </Provider>
    )
  }
};
