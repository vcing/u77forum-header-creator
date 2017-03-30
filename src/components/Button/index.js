import React, {Component} from 'react';
import {observer, inject} from 'mobx-react';
import styles from './Button.css';

@inject(stores => ({text: stores.uiStore.text, buttonOnClick: stores.uiStore.buttonOnClick}))@observer
export default class Button extends Component {
    render() {
        return (
            <button className={styles.Button} onClick={this.props.buttonOnClick}>{this.props.text}</button>
        );
    }
}