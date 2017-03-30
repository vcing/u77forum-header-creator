import React, {Component} from 'react';
import {observer, Provider} from 'mobx-react';
import {observable, action} from 'mobx';
import Button from './components/Button';

//styles
import styles from './App.css';

@observer
class App extends Component {
  @observable count = 0;
  @observable uiStore = {
    text: 'button',
    buttonOnClick:this.buttonOnClick.bind(this)
  }
  render() {
    return (
      <Provider user={this.user} uiStore={this.uiStore}>
        <div className={styles.App}>
          <span>{this.count}</span>
          <Button/>
        </div>
      </Provider>
    )
  }

  @action buttonOnClick() {
    this.count++;
  }
};

export default App;
