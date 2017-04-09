import React, {Component} from 'react';
// import {observable} from 'mobx';
import {observer, Provider} from 'mobx-react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import DevTools from 'mobx-react-devtools';
import stores from '../../stores';
import Home from '../Home';
import About from '../About';
import styles from './App.css';

@observer
export default class App extends Component {
  render() {
    return (
      <Provider {...stores}>
        <Router history={stores.uiStore.history}>
          <Route
            render={({location}) => (
            <div className={styles.App}>
              <ReactCSSTransitionGroup
                transitionName="example"
                transitionEnterTimeout={500}
                transitionLeaveTimeout={300}>
                <Route path='/' exact component={Home} key={Math.random()} location={location}/>
              </ReactCSSTransitionGroup>
              <ReactCSSTransitionGroup
                transitionName="example"
                transitionEnterTimeout={500}
                transitionLeaveTimeout={300}>
                <Route path='/about' component={About} key={Math.random()} location={location}/>
                <Link to='/' className={styles.link}>home</Link>
                <Link to='/about' className={styles.link}>about</Link>
              </ReactCSSTransitionGroup>
              <DevTools/>
            </div>
          )}/>
        </Router>
      </Provider>
    )
  }
};
