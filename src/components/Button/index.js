import {observer} from 'mobx-react';
import React, {Component} from 'react';
import styles from './Button.css';


@observer class Button extends Component {
    render() {
        return (<button className={styles.Button} onClick={this.props.onClick}>test button</button>);
    }
};

export default Button;