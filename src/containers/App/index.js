import React, {Component} from 'react';
// import {observable} from 'mobx';
import {observer, Provider} from 'mobx-react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import DevTools from 'mobx-react-devtools';
import stores from '../../stores';
import Template from '../Template';
import Editor from '../Editor';
import styles from './App.css';

@observer
export default class App extends Component {
  render() {
    return (
      <Provider {...stores}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <Editor/>
            </div>
            <div className="col-lg-6 col-md-12">
              <div id="template-result">
                <Template/>
              </div>
            </div>
          </div>
          <div className="row" style={{margin:'20px 0'}}>
            <div className="btn-toolbar col-sm-4 col-sm-push-4">
              <div className="btn-group">
                <button className="btn btn-success" onClick={function() {
                  eval(`$('#html-result').val($('#template-result').html()+"<script>$('#detail-showall').click(()=>window.jQuery('#description').removeClass('collapse'))</script>");`)
                }}>生成HTML</button>
              </div>
              <div className="btn-group">
                <button className="btn btn-primary">提交</button>
              </div>
            </div>
          </div>
          <div className="row">
            <textarea className="center-block" id="html-result" style={{width:'80%',margin:'0 auto'}} rows="30"></textarea>
          </div>
        </div>
      </Provider>
    )
  }
};
