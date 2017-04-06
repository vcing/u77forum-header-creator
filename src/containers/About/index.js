import React, {Component} from 'react';
import {observer, inject} from 'mobx-react';

@inject(stores => ({uiStore:stores.uiStore})) @observer
export default class About extends Component {
    render () {
        // console.log(this.props.uiStore);
        return (
            <div key='about'>about</div>
        )
    }
}