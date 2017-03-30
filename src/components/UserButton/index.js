import React, {Component} from 'react';
import {observer, inject} from 'mobx-react';

@inject(stores => ({text: stores.user.age, buttonOnClick: stores.user.buttonOnClick}))@observer
export default class Button extends Component {
    render() {
        return (
            <button onClick={this.props.buttonOnClick}>{this.props.text}</button>
        );
    }
}