import React, {Component} from 'react';
import {observer, Provider} from 'mobx-react';
import {observable, action, extendObservable} from 'mobx';
import Button from './components/Button';
import UserButton from './components/UserButton';

//styles
import styles from './App.css';

@observer
class App extends Component {
  @observable count = 0;
  @observable uiStore = {
    text: 'button',
    buttonOnClick: this
      .buttonOnClick
      .bind(this)
  }
  @observable user = {
    name: 'vcing',
    age: false,
    buttonOnClick: this
      .userOnClick
      .bind(this)
  }
  render() {
    return (
      <Provider user={this.user} uiStore={this.uiStore}>
        <div className={styles.App}>
          <span>{this.count}</span>
          <Button/>
          <UserButton/>
        </div>
      </Provider>
    )
  }

  @action buttonOnClick() {
    this.count++;
  }

  @action userOnClick() {
    this.user.age
      ? this.user.age++
      : extendObservable(this.user, {age: 20});
    console.log(this.user.age);
  }
};

export default App;
