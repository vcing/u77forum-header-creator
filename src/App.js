import React, {Component} from 'react';
import {observer} from 'mobx-react';
import {observable} from 'mobx';
import Button from './components/Button';

//styles
import styles from './App.css';

@observer class App extends Component {
  @observable count = 0;

  render() {
    return (
      <div className={styles.App}>
        <Button onClick={() => {
          this.count++;
        }}/>
        <span>{this.count}</span>
      </div>
    )
  }
};

export default App;
